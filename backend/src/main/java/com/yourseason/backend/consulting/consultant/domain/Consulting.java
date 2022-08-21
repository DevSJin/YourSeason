package com.yourseason.backend.consulting.consultant.domain;

import com.yourseason.backend.common.domain.BaseTimeEntity;
import com.yourseason.backend.consulting.consultant.domain.result.ConsultingResult;
import com.yourseason.backend.member.consultant.domain.Consultant;
import com.yourseason.backend.member.customer.domain.Customer;
import com.yourseason.backend.reservation.domain.Reservation;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "id", column = @Column(name = "consulting_id"))
@Entity
public class Consulting extends BaseTimeEntity {

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "consulting_result_id")
    private ConsultingResult consultingResult;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consultant_id")
    private Consultant consultant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @NotNull
    private String sessionId;

    private boolean hasReview;

    @Builder
    public Consulting(Long id, LocalDateTime createdDate, LocalDateTime lastModifiedDate, LocalDateTime deletedDate,
                      ConsultingResult consultingResult, String sessionId, boolean hasReview, Consultant consultant, Customer customer) {
        super(id, createdDate, lastModifiedDate, deletedDate, true);
        this.consultingResult = consultingResult;
        this.consultant = consultant;
        this.customer = customer;
        this.sessionId = sessionId;
        this.hasReview = hasReview;
    }

    public void registerReview() {
        hasReview = true;
    }

    public void deleteReview() {
        hasReview = false;
    }

    public boolean hasReview() {
        return hasReview;
    }

    public void enterCustomer(Customer customer) {
        this.customer = customer;
    }

    public void done() {
        endReservation();
        delete();
    }

    private void endReservation() {
        consultant.getReservations()
                .stream()
                .filter(Reservation::isActive)
                .findFirst()
                .ifPresent(Reservation::done);
    }
}
