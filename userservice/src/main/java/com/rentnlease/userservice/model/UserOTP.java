/**
 * This is a bean class for table 'rentnlease.userotp'.
 * */

package com.rentnlease.userservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userotp")
public class UserOTP {
	@Id
	@Column(name = "email") private String email;
	@Column(name = "otp") private Integer otp;
	
	public UserOTP() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getOtp() {
		return otp;
	}

	public void setOtp(Integer otp) {
		this.otp = otp;
	}
	
}
