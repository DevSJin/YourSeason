package com.yourseason.backend.member.consultant.domain;

import com.yourseason.backend.member.common.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {

    Member getByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByNickname(String nickname);

    List<Consultant> findByIsActiveTrueOrderByIdDesc();

    List<Consultant> findByIsActiveTrueOrderByReviewCountDesc();

    List<Consultant> findByIsActiveTrueOrderByStarAverageDesc();

    List<Consultant> findByIsActiveTrueOrderByCostDesc();

    List<Consultant> findByIsActiveTrueOrderByCost();

    List<Consultant> findByIsActiveTrueOrderByConsultingCountDesc();

    List<Consultant> findByIsActiveTrueAndNicknameContaining(String keyword);
}
