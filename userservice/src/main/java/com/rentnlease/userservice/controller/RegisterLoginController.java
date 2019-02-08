/**
 * This class is a controller to map REST requests.
 * It performs required actions on receiving requests.
 * */

package com.rentnlease.userservice.controller;

import java.util.Properties;
import java.util.Random;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rentnlease.userservice.data.UserOTPRepository;
import com.rentnlease.userservice.data.UserRepository;
import com.rentnlease.userservice.model.ApiResponse;
import com.rentnlease.userservice.model.ApiUserResponse;
import com.rentnlease.userservice.model.GenerateOTPRequest;
import com.rentnlease.userservice.model.LoginRequest;
import com.rentnlease.userservice.model.RegistrationRequest;
import com.rentnlease.userservice.model.ValidateOTPRequest;
import com.rentnlease.userservice.entity.User;
import com.rentnlease.userservice.entity.UserOTP;

@RestController
public class RegisterLoginController {
		@Autowired
		UserRepository userRepo;
		@Autowired
		UserOTPRepository userOTPRepo;

		/**This methos generates an OTP on receiving the email address from user.
		 * Make an entry in database for given email and generated OTP.
		 * And sends that OTP to the user on given email address.
		 * 
		 * Input : (String) email
		 * Output : (String) success message
		 */
		@CrossOrigin
		@PostMapping(path="/")
		public ResponseEntity<?> sendOTP(@RequestBody GenerateOTPRequest generateOTPRequest) {
			Integer otp = RegisterLoginController.generateOTP();
			
			UserOTP uOtp = new UserOTP();
			uOtp.setEmail(generateOTPRequest.getEmail());
			uOtp.setOtp(otp);
			userOTPRepo.save(uOtp);
			
			setUpMailConfiguration("rentnleaseservice@gmail.com", "rentnlease#2019", otp, generateOTPRequest.getEmail());
			
			return ResponseEntity.ok(new ApiResponse(true, "OTP sent Successfully"));
		}
		
		/**This methos validates an OTP and email address.
		 * User submits an OTP sent through email.
		 * 
		 * Input : (String) email, (int) OTP
		 * Output : (booelan) flag
		 */
		@CrossOrigin
		@PostMapping(path="/validateOTP")
		public ResponseEntity<?> validateOTP(@RequestBody ValidateOTPRequest validateOTPRequest) {
			UserOTP u = userOTPRepo.findUserByEmail(validateOTPRequest.getEmail());
			if(u!=null) {
				if(u.getOtp().equals(validateOTPRequest.getOtp())) {
					return ResponseEntity.ok(new ApiResponse(true, "Correct OTP."));
				}
			}
			return ResponseEntity.ok(new ApiResponse(false, "Incorrect OTP."));
		}
		
		/**
		 * This method creates a database entry in user table.
		 * 
		 * Input: User Details.
		 * Output: User (bean) Object.
		 * */
		@CrossOrigin
		@PostMapping(path="/register")
		public ResponseEntity<?> register(@RequestBody RegistrationRequest registrationRequest) {
			User user = new User();
			user.setFirstname(registrationRequest.getFirstname());
			user.setLastname(registrationRequest.getLastname());
			user.setEmail(registrationRequest.getEmail());
			user.setPassword(registrationRequest.getPassword());
			user.setPhone(registrationRequest.getPhone());
			
			User u = userRepo.save(user);
			if(u!=null) {
				return ResponseEntity.ok(new ApiUserResponse(true, u));
			} else {
				return ResponseEntity.ok(new ApiUserResponse(false, null));
			}
		}
		
		/**
		 * This method validates login credentials (email and password).
		 * 
		 * Input: email & password.
		 * Output: User (bean) object.
		 * */
		@CrossOrigin
		@PostMapping(path="/login")
		public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
			
			User u = userRepo.findUserByEmailAndPassword(loginRequest.getEmail(),loginRequest.getPassword());
			if(u!=null) {
				return ResponseEntity.ok(new ApiUserResponse(true, u));
			}
			//return ResponseEntity.ok(new ApiUserResponse(false, null));
			return (ResponseEntity<?>) ResponseEntity.badRequest().body("bad request");
		}
		
		//This method is used to generate an OTp between range 1000 and 9999.
		public static Integer generateOTP() {
			  int i;
		      Random r = new Random();
			  i = r.nextInt((9999 - 1000) + 1) + 1000;
			  return i; 
		}
		
		
		private void setUpMailConfiguration(final String email, final String password,Integer otp, final String toEmail){
	        Properties props = setUpProperties();
	        Authenticator auth = new Authenticator() {
	            //override the getPasswordAuthentication method
	            protected PasswordAuthentication getPasswordAuthentication() {
	                return new PasswordAuthentication(email, password);
	            }
	        };
	        Session session = Session.getDefaultInstance(props, auth);
	        sendMails(session, email, "RentNLease OTP",otp, toEmail);
	    }
	    
	    private void sendMails(Session session, String sender, String subject,Integer otp, String toEmail){
	        String body = "YourOTP is" + otp.toString();
	        sendEmail(session, sender, toEmail, subject, body);
	    }
	    
	    private Properties setUpProperties(){
	        Properties props = new Properties();
	        props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
	        props.put("mail.smtp.socketFactory.port", "465"); //SSL Port
	        props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory"); //SSL Factory Class
	        props.put("mail.smtp.auth", "true"); //Enabling SMTP Authentication
	        props.put("mail.smtp.port", "465"); //SMTP Port
	        return props;
	    }

		private static void sendEmail(Session session, String from, String toEmail, String subject, String body) {
	        try {
	            MimeMessage msg = new MimeMessage(session);
	            //set message headers
	            msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
	            msg.addHeader("format", "flowed");
	            msg.addHeader("Content-Transfer-Encoding", "8bit");
	            msg.setFrom(new InternetAddress(from, "RentNLease"));
	            msg.setReplyTo(InternetAddress.parse(from, false));
	            msg.setSubject(subject, "UTF-8");
	            msg.setText(body, "UTF-8");
	            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail, false));
	            Transport.send(msg);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
}
