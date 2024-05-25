package com.paul.busBookingSystem;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {
    @GetMapping("/api/bookings")
    public String getBookings() {
        // Return some sample data
        return "List of bookings";
    }

    @GetMapping("/students")
    public String getStudents() {
        return new String();
    }
    
}
