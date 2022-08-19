package com.yourseason.backend.reservation.domain;

import com.yourseason.backend.common.domain.BaseTimeEntity;
import com.yourseason.backend.member.consultant.domain.Consultant;
import com.yourseason.backend.member.customer.domain.Customer;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "id", column = @Column(name = "reservation_id"))
@Entity
public class Reservation extends BaseTimeEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consultant_id")
    private Consultant consultant;

    @NotNull
    private LocalDate date;

    @NotNull
    private LocalTime time;

    private String request;

    @Builder
    public Reservation(Long id, LocalDateTime createdDate, LocalDateTime lastModifiedDate, LocalDateTime deletedDate,
                       Customer customer, Consultant consultant, LocalDate date, LocalTime time, String request) {
        super(id, createdDate, lastModifiedDate, deletedDate, true);
        this.customer = customer;
        this.consultant = consultant;
        this.date = date;
        this.time = time;
        this.request = request;
    }

    public void register(Customer customer, Consultant consultant) {
        setCustomer(customer);
        setConsultant(consultant);
    }

    public void cancel() {
        super.delete();
    }

    public void done() {
        super.delete();
    }

    private void setCustomer(Customer customer) {
        this.customer = customer;
        customer.getReservations().add(this);
    }

    private void setConsultant(Consultant consultant) {
        this.consultant = consultant;
        consultant.getReservations().add(this);
    }
}
