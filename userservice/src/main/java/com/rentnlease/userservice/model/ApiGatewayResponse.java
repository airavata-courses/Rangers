package com.rentnlease.userservice.model;

public class ApiGatewayResponse {
	private boolean success;
	private ApiGateway gateway;
	
	public ApiGatewayResponse() {}
	
	public ApiGatewayResponse(boolean success, ApiGateway gateway) {
		this.success = success;
		this.gateway = gateway;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public ApiGateway getGateway() {
		return gateway;
	}

	public void setGateway(ApiGateway gateway) {
		this.gateway = gateway;
	}
	
	
}
