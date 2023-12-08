package com.healthmotiveserver.stage.entity;

import com.healthmotiveserver.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "stage")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Stage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stage_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;

    @Column
    private Long stagenumber;


    @Column(name = "completed")
    private boolean completed;

}
