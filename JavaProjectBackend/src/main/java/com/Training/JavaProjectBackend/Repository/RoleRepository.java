package com.Training.JavaProjectBackend.Repository;

import java.util.Optional;

import com.Training.JavaProjectBackend.Models.ERole;
import com.Training.JavaProjectBackend.Models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
