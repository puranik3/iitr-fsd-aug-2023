package com.greatlearning.security.spring_boot_security.jwt.resource;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}