package com.rentnlease.userservice.model;

import com.rentnlease.userservice.entity.User;

public class ApiUserResponse {
	 private boolean success;
	 private User user;
	 
	 public ApiUserResponse(boolean success, User user) {
		 this.success = success;
		 this.user = user;
	 }
	 
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	 
	 
}
