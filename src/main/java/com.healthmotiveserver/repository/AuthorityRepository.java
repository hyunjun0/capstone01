package com.healthmotiveserver.repository;

import com.healthmotiveserver.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
