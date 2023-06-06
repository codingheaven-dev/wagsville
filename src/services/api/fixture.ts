import { v4 as uuidv4 } from "uuid";
import { Service, Customer, Employee, Appointment } from "../../types";
import {
  FaBug,
  FaCut,
  FaPaw,
  FaShower,
  FaSprayCan,
  FaTooth,
  FaHandPaper,
} from "react-icons/fa";
import { MdHearing } from "react-icons/md";

const employees: Employee[] = [
  {
    id: uuidv4(),
    name: "Sarah Johnson",
    title: "Junior groomer",
    skills: ["Cut"],
    image: "https://i.pravatar.cc/100?img=49",
  },
  {
    id: uuidv4(),
    name: "Jonathan Lee",
    title: "Senior groomer",
    skills: ["Cut", "Nails"],
    image: "https://i.pravatar.cc/100?img=68",
  },
  {
    id: uuidv4(),
    name: "Julia Kim",
    title: "Junior groomer",
    skills: ["Trim", "Nails", "Wash"],
    image: "https://i.pravatar.cc/100?img=36",
  },
  {
    id: uuidv4(),
    name: "Andrew Chen",
    title: "Senior groomer",
    skills: ["Cut", "Wash"],
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: uuidv4(),
    name: "Emily Davis",
    title: "Junior groomer",
    skills: ["Wash"],
    image: "https://i.pravatar.cc/100?img=26",
  },
];

const customers: Customer[] = [
  {
    id: uuidv4(),
    owner: "John Smith",
    dog: "Buddy",
    breed: "Golden Retriever",
    birthdate: "2018-05-03",
  },
  {
    id: uuidv4(),
    owner: "Jessica Thompson",
    dog: "Charlie",
    breed: "Labrador Retriever",
    birthdate: "2017-09-15",
  },
  {
    id: uuidv4(),
    owner: "Emily Johnson",
    dog: "Max",
    breed: "German Shepherd",
    birthdate: "2019-02-10",
  },
  {
    id: uuidv4(),
    owner: "Michael Lee",
    dog: "Daisy",
    breed: "Poodle",
    birthdate: "2020-11-22",
  },
  {
    id: uuidv4(),
    owner: "Samantha Davis",
    dog: "Lola",
    breed: "French Bulldog",
    birthdate: "2016-07-14",
  },
  {
    id: uuidv4(),
    owner: "William Brown",
    dog: "Rocky",
    breed: "Boxer",
    birthdate: "2015-01-31",
  },
  {
    id: uuidv4(),
    owner: "Olivia Wilson",
    dog: "Coco",
    breed: "Yorkshire Terrier",
    birthdate: "2018-12-08",
  },
  {
    id: uuidv4(),
    owner: "David Martin",
    dog: "Bailey",
    breed: "Beagle",
    birthdate: "2014-04-20",
  },
  {
    id: uuidv4(),
    owner: "Sophia Garcia",
    dog: "Molly",
    breed: "Siberian Husky",
    birthdate: "2016-03-27",
  },
  {
    id: uuidv4(),
    owner: "Daniel Rodriguez",
    dog: "Lucy",
    breed: "Chihuahua",
    birthdate: "2021-01-11",
  },
  {
    id: uuidv4(),
    owner: "Alice Smith",
    dog: "Buddy",
    breed: "Golden Retriever",
    birthdate: "2018-05-15",
  },
  {
    id: uuidv4(),
    owner: "Tommy Nguyen",
    dog: "Lucky",
    breed: "Poodle",
    birthdate: "2020-02-20",
  },
  {
    id: uuidv4(),
    owner: "Katrina Patel",
    dog: "Max",
    breed: "Labrador Retriever",
    birthdate: "2019-09-05",
  },
  {
    id: uuidv4(),
    owner: "Alicia Brown",
    dog: "Daisy",
    breed: "German Shepherd",
    birthdate: "2017-12-12",
  },
  {
    id: uuidv4(),
    owner: "Hannah Wilson",
    dog: "Charlie",
    breed: "Boxer",
    birthdate: "2020-03-18",
  },
  {
    id: uuidv4(),
    owner: "Manuel Lee",
    dog: "Bella",
    breed: "Bulldog",
    birthdate: "2016-07-07",
  },
  {
    id: uuidv4(),
    owner: "Lucia Baker",
    dog: "Rocky",
    breed: "Chihuahua",
    birthdate: "2018-11-11",
  },
  {
    id: uuidv4(),
    owner: "Maximilian Perez",
    dog: "Duke",
    breed: "Siberian Husky",
    birthdate: "2019-04-08",
  },
  {
    id: uuidv4(),
    owner: "Emma Wilson",
    dog: "Zeus",
    breed: "Doberman Pinscher",
    birthdate: "2017-10-01",
  },
  {
    id: uuidv4(),
    owner: "Youssef Garcia",
    dog: "Roxy",
    breed: "Great Dane",
    birthdate: "2020-08-27",
  },
  {
    id: uuidv4(),
    owner: "Leah Smith",
    dog: "Luna",
    breed: "Australian Shepherd",
    birthdate: "2019-01-23",
  },
  {
    id: uuidv4(),
    owner: "Eva Hernandez",
    dog: "Milo",
    breed: "Beagle",
    birthdate: "2018-06-19",
  },
  {
    id: uuidv4(),
    owner: "Sophie Davis",
    dog: "Zoe",
    breed: "Pug",
    birthdate: "2017-02-14",
  },
  {
    id: uuidv4(),
    owner: "Hugo Wilson",
    dog: "Harley",
    breed: "Bernese Mountain Dog",
    birthdate: "2020-09-19",
  },
  {
    id: uuidv4(),
    owner: "Carla Thomas",
    dog: "Bear",
    breed: "Dalmatian",
    birthdate: "2016-03-26",
  },
  {
    id: uuidv4(),
    owner: "Niklas Martinez",
    dog: "Mia",
    breed: "Rottweiler",
    birthdate: "2019-05-30",
  },
  {
    id: uuidv4(),
    owner: "Olivia Davis",
    dog: "Maggie",
    breed: "Shih Tzu",
    birthdate: "2018-08-16",
  },
  {
    id: uuidv4(),
    owner: "Lena Brown",
    dog: "Ruby",
    breed: "Bichon Frise",
    birthdate: "2017-04-10",
  },
  {
    id: uuidv4(),
    owner: "Maria Garcia",
    dog: "Charlie",
    breed: "Golden Retriever",
    birthdate: "2019-05-03",
  },
  {
    id: uuidv4(),
    owner: "Mohammed Ali",
    dog: "Rocky",
    breed: "Boxer",
    birthdate: "2020-11-11",
  },
  {
    id: uuidv4(),
    owner: "Anna Ivanova",
    dog: "Max",
    breed: "German Shepherd",
    birthdate: "2020-07-25",
  },
  {
    id: uuidv4(),
    owner: "Tom Smith",
    dog: "Buddy",
    breed: "Labrador Retriever",
    birthdate: "2021-02-18",
  },
  {
    id: uuidv4(),
    owner: "Sophia Chen",
    dog: "Bailey",
    breed: "Cavalier King Charles Spaniel",
    birthdate: "2020-06-13",
  },
  {
    id: uuidv4(),
    owner: "Hans Müller",
    dog: "Fido",
    breed: "Dachshund",
    birthdate: "2019-11-30",
  },
  {
    id: uuidv4(),
    owner: "Fatima Rahman",
    dog: "Lucy",
    breed: "Poodle",
    birthdate: "2020-03-05",
  },
  {
    id: uuidv4(),
    owner: "Lars Andersen",
    dog: "Toby",
    breed: "Shetland Sheepdog",
    birthdate: "2021-01-22",
  },
  {
    id: uuidv4(),
    owner: "Yuko Tanaka",
    dog: "Mocha",
    breed: "Shiba Inu",
    birthdate: "2019-09-10",
  },
  {
    id: uuidv4(),
    owner: "Emiliano Rodriguez",
    dog: "Luna",
    breed: "Chihuahua",
    birthdate: "2020-12-02",
  },
  {
    id: uuidv4(),
    owner: "Julia Kim",
    dog: "Ziggy",
    breed: "Bernese Mountain Dog",
    birthdate: "2019-07-01",
  },
  {
    id: uuidv4(),
    owner: "Pavel Novak",
    dog: "Rufus",
    breed: "Beagle",
    birthdate: "2020-04-18",
  },
  {
    id: uuidv4(),
    owner: "Amina Ali",
    dog: "Leo",
    breed: "Bichon Frise",
    birthdate: "2019-10-07",
  },
  {
    id: uuidv4(),
    owner: "Yannick Dubois",
    dog: "Lucky",
    breed: "French Bulldog",
    birthdate: "2021-03-12",
  },
  {
    id: uuidv4(),
    owner: "Hazel Wong",
    dog: "Cody",
    breed: "English Springer Spaniel",
    birthdate: "2020-02-09",
  },
];

const services: Service[] = [
  {
    id: uuidv4(),
    name: "Bath & Brush",
    price: 25.0,
    duration: 60,
    icon: FaShower,
    color: "#D78967",
  },
  {
    id: uuidv4(),
    name: "Haircut",
    price: 45.0,
    duration: 90,
    icon: FaCut,
    color: "#D25F5F",
  },
  {
    id: uuidv4(),
    name: "Nail Trim",
    price: 15.0,
    duration: 45,
    icon: FaHandPaper,
    color: "#639E7D",
  },
  {
    id: uuidv4(),
    name: "Teeth Cleaning",
    price: 30.0,
    duration: 75,
    icon: FaTooth,
    color: "#8762A8",
  },
  {
    id: uuidv4(),
    name: "Ear Cleaning",
    price: 20.0,
    duration: 60,
    icon: MdHearing,
    color: "#AE4D7D",
  },
  {
    id: uuidv4(),
    name: "Flea Treatment",
    price: 35.0,
    duration: 90,
    icon: FaBug,
    color: "#AE6F0E",
  },
  {
    id: uuidv4(),
    name: "Coat Conditioning",
    price: 30.0,
    duration: 75,
    icon: FaSprayCan,
    color: "#3A3BAC",
  },
  {
    id: uuidv4(),
    name: "Paw Pad Trim",
    price: 15.0,
    duration: 45,
    icon: FaPaw,
    color: "#8F6D3C",
  },
];

// Get the current week's start and end dates
const currentDate = new Date();
const currentWeekStart = new Date(currentDate);
currentWeekStart.setHours(0, 0, 0, 0);
currentWeekStart.setDate(
  currentWeekStart.getDate() + 1 - currentWeekStart.getDay()
);
const currentWeekEnd = new Date(currentDate);
currentWeekEnd.setHours(23, 59, 59, 999);
currentWeekEnd.setDate(currentWeekEnd.getDate() + 5 - currentWeekEnd.getDay());

const appointments: Appointment[] = [];

// Loop through each customer
for (const customer of customers) {
  // Generate 1-3 appointments on different days in office hours
  const numAppointments = Math.floor(Math.random() * 4) + 1;
  const appointmentDates: [Date, Service][] = [];
  for (let i = 0; i < numAppointments; i++) {
    // Choose a random service for the appointment
    const service = services[Math.floor(Math.random() * services.length)];

    let appointmentDate = new Date(currentWeekStart);
    // Choose a random weekday (Mon-Fri) within the current week
    appointmentDate.setDate(
      appointmentDate.getDate() + Math.floor(Math.random() * 5)
    );
    // Choose a random time between 8 am and 4 pm
    appointmentDate.setHours(
      Math.floor(Math.random() * 8) + 8,
      Math.floor(Math.random() * 4) * 15,
      0,
      0
    );
    // Make sure the appointment is within office hours
    const endTime = new Date(
      appointmentDate.getTime() + service.duration * 60000
    );
    if (
      endTime.getHours() < 16 ||
      (endTime.getHours() === 16 && endTime.getMinutes() === 0)
    ) {
      appointmentDates.push([appointmentDate, service]);
    }
  }

  // Loop through each appointment date and create an appointment
  for (const [appointmentDate, service] of appointmentDates) {
    // Find an available employee for the appointment

    const availableEmployees = employees.filter((employee) => {
      // Check if the employee is available at the appointment time
      const endOfAppointment = new Date(
        appointmentDate.getTime() + service.duration * 60000
      );
      return !appointments
        .filter(({ employeeId }) => employee.id === employeeId)
        .some((appointment) => {
          const startTime = new Date(appointment.startTime);
          const service = services.find(
            ({ id }) => id === appointment.serviceId
          );
          return (
            service &&
            startTime.getTime() < endOfAppointment.getTime() &&
            startTime.getTime() + service.duration * 60000 >
              appointmentDate.getTime()
          );
        });
    });

    if (availableEmployees.length === 0) {
      continue;
    }

    // Choose a random employee from the available employees
    const employee =
      availableEmployees[Math.floor(Math.random() * availableEmployees.length)];

    // Create the appointment
    const appointment: Appointment = {
      id: uuidv4(),
      customerId: customer.id,
      employeeId: employee.id,
      serviceId: service.id,
      startTime: appointmentDate.toISOString(),
    };

    // Append the appointment to the list
    appointments.push(appointment);
  }
}

export { employees, customers, services, appointments };
