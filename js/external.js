"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var question = "What is your favorite color?"
var answer = prompt(question);
alert(answer + " is my favorite color too!");

/* You have rented some movies for your kids: The little mermaid (for
3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day,
you don't know yet if they're going to like it). If price for a movie
per day is $3, how much will you have to pay? */

var q1 = "How many days do you plan to keep 'The Little Mermaid'?";
var a1 = prompt(q1);
console.log(a1);
var q2 = "How many days do you plan to keep 'Brother Bear'?";
var a2 = prompt(q2);
console.log(a2);
var q3 = "How many days do you plan to keep 'Hercules'?";
var a3 = prompt(q3);
console.log(a3);

var total = (parseInt(a1) + parseInt(a2) + parseInt(a3)) * 3;
alert("Your total will be $" + total + ".00");

/* Suppose you're working as a contractor for 3 companies: Google, Amazon
and Facebook, they pay you a different rate per hour. Google pays $400,
Amazon $380, and Facebook $350. How much will you receive in payment for
this week? You worked 10 hours for Facebook, 6 hours for Google and 4
hours for Amazon.*/

var googleHours = "How many hours did you log for Google this week?";
var google = prompt(googleHours);
var amazonHours = "How many hours did you log for Amazon this week?";
var amazon = prompt(amazonHours);
var facebookHours = "How many hours did you log for Facebook this week?";
var facebook = prompt(facebookHours);
var googlePay = parseInt(google) * 400;
var amazonPay = parseInt(amazon) * 380;
var facebookPay = parseInt(facebook) * 350;

var totalPay = googlePay + amazonPay + facebookPay;
alert("Your total pay this week before taxes is: $" + totalPay + ".00");

/* A student can be enrolled in a class only if the class is not full and
the class schedule does not conflict with her current schedule.*/

var offerExpired = false;
var howMany = "How many widgets will you be purchasing today?"

var numberWidgets = prompt(howMany);
var premium = "Are you a Premium member?"

var membership = prompt(premium);
if (membership === "yes") var premiumMembership = true; else premiumMembership = false;

var offerApplied = (numberWidgets > 2 || premiumMembership) && !offerExpired;
if (offerApplied === true) alert("You qualify for the special offer!")
    else alert("You do not qualify for the special offer.")

/* A product offer can be applied only if a person buys more than 2 items,
and the offer has not expired. Premium members do not need to buy a
specific amount of products. */

var maxClassSize = 24;
var enrollment = "How many students are currently enrolled?"
var numberEnrolled = prompt(enrollment);

var classFull = numberEnrolled >= maxClassSize;

var conflict = "Does the student have another class during this time period?"
var scheduleConflict = prompt(conflict);
if (scheduleConflict === "no") var schedule = true; else schedule = false;

var canEnroll = !classFull && schedule;
if (canEnroll === true) alert("Student may enroll."); else alert("Student may not enroll.");
