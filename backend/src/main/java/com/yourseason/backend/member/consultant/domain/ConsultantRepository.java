package com.yourseason.backend.member.consultant.domain;

import com.yourseason.backend.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {

    Member getByEmailAndPassword(String email, String password);
}
