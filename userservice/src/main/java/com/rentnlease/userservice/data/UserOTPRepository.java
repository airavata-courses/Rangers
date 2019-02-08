package com.rentnlease.userservice.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rentnlease.userservice.entity.UserOTP;


@Repository("userOTPRepository")
public interface UserOTPRepository extends CrudRepository<UserOTP, String>{
	UserOTP findUserByEmail(String email);
}
