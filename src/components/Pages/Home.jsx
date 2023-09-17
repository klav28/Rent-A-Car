import Container from '../Container/Container';
import React from 'react';
import StHome from './Home.components';

const Home = () => {
  return (
    <Container>
      <StHome.H1>WE ARE CAR RENTAL COMPANY</StHome.H1>
      <StHome.Text>
        Car rental refers to the process of renting a vehicle, typically for a
        specified period, from a car rental company.
      </StHome.Text>
      <StHome.Text>
        People rent cars for various reasons, including:
      </StHome.Text>
      <StHome.Ul>
        <StHome.Li>
          <StHome.Accent>Travel:</StHome.Accent> Many people rent cars when they
          are traveling to a new city or country for business or leisure.
          Renting a car provides flexibility and convenience for getting around
          and exploring.
        </StHome.Li>
        <StHome.Li>
          <StHome.Accent>Temporary Transportation:</StHome.Accent> Some
          individuals may need a rental car when their own vehicle is undergoing
          repairs or maintenance, or when they need an extra vehicle for a short
          period.
        </StHome.Li>
        <StHome.Li>
          <StHome.Accent>Special Occasions:</StHome.Accent> Renting a car for
          special occasions like weddings, anniversaries, or proms is a common
          practice. People often choose luxury or exotic cars for such events.
        </StHome.Li>
        <StHome.Li>
          <StHome.Accent>Business:</StHome.Accent> Business travelers often rent
          cars when they are on a business trip to get to meetings, conferences,
          or visit clients.
        </StHome.Li>
        <StHome.Li>
          <StHome.Accent>Testing Out Vehicles</StHome.Accent>: Some people rent
          cars to test drive a model they are considering purchasing. This
          allows them to get a feel for the vehicle before making a commitment.
        </StHome.Li>
        <StHome.Li>
          <StHome.Accent>Avoiding Wear and Tear:</StHome.Accent> Renting a car
          for long road trips can help avoid putting excessive mileage and wear
          and tear on one's personal vehicle.
        </StHome.Li>
      </StHome.Ul>
      <StHome.Text>
        Car rental companies have a fleet of vehicles that customers can choose
        from, including economy cars, compact cars, SUVs, vans, luxury cars, and
        sometimes even specialty vehicles like convertibles or sports cars. The
        rental terms, including the rental period, rental rate, insurance
        options, and requirements, vary from one rental company to another and
        can depend on factors such as location, the type of vehicle, and the
        renter's age and driving history.
      </StHome.Text>
      <StHome.Button to="/Catalog">Our Catalog</StHome.Button>
      <StHome.Text>
        Remember that driving laws and regulations may vary from one location to
        another, so it's important to familiarize yourself with the rules of the
        area where you'll be driving.
      </StHome.Text>
      <StHome.Text>
        <StHome.Accent>Car rental basics</StHome.Accent> encompass the
        fundamental information and processes involved in renting a car from a
        car rental company. Whether you're renting a car for a vacation,
        business trip, or any other purpose, understanding these basics will
        help you have a smooth rental experience:
      </StHome.Text>
      <StHome.Ol>
        <StHome.Li>
          Minimum Age Requirement: Car rental companies typically require
          renters to be at least 21 years old, though the minimum age may vary
          by company and location. Some companies charge an additional fee for
          renters under 25 due to the increased risk associated with younger
          drivers.
        </StHome.Li>
        <StHome.Li>
          Driver's License: You must have a valid driver's license in your name
          to rent a car. International renters may need an International Driving
          Permit (IDP) in addition to their home country's driver's license.
        </StHome.Li>
        <StHome.Li>
          Payment Methods: Most car rental companies accept major credit cards,
          and some also accept debit cards. You'll need a credit card or a debit
          card with enough available funds to cover the rental charges and a
          security deposit.
        </StHome.Li>
        <StHome.Li>
          Reservation: It's a good idea to make a reservation in advance,
          especially during peak travel seasons, to ensure the availability of
          the vehicle type you want. Reservations can often be made online or by
          phone.
        </StHome.Li>
        <StHome.Li>
          Rental Rates: Rental rates can vary based on the car type, rental
          location, duration of the rental, and any additional services or
          coverage you choose. Be sure to understand the total cost, including
          taxes and fees, before confirming your reservation.
        </StHome.Li>
        <StHome.Li>
          Insurance Options:Car rental companies typically offer various
          insurance options, including Collision Damage Waiver (CDW) or Loss
          Damage Waiver (LDW), Liability Insurance, and Personal Accident
          Insurance. You can either accept these coverages or use your personal
          auto insurance if it provides rental car coverage. Evaluate your
          insurance needs before making a decision.
        </StHome.Li>
      </StHome.Ol>
      <StHome.Text>
        Understanding these car rental basics will help you make informed
        decisions and ensure a hassle-free rental experience. Always read and
        understand the rental agreement and ask any questions you may have
        before driving away with the rental car.
      </StHome.Text>
    </Container>
  );
};

export default Home;
