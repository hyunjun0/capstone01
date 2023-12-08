package com.healthmotiveserver.stage.repository;

import com.healthmotiveserver.entity.User;
import com.healthmotiveserver.stage.entity.Stage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StageRepository extends JpaRepository<Stage, Long> {

    Optional<Stage> findByStagenumberandUser(Long Stagenumber, User user);




}
