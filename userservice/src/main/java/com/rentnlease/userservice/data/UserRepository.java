package com.rentnlease.userservice.data;

import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rentnlease.userservice.model.User;

@Repository("userRepository")
public interface UserRepository extends CrudRepository<User, Integer>{
	User findUserByEmailAndPassword(String email,String Password);
}
