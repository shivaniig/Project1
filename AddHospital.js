const mongoose = require('mongoose');
const Hospital = require('./Models/Hospital'); 

mongoose.connect('mongodb+srv://shivanigs0210:Akanungo0602@cluster0.hvok4kt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const hospitalData = [
    {
        hospitalId: "HSP001",
        name: "Bhagwan Mahavir Hospital",
        address: "Sector 14 Extension, Madhuban Chowk, Rohini, Delhi, 110085",
        phone: "011-27554550",
        email: "info@bmhdelhi.com",
        departments: ["Cardiology", "Orthopedics", "Neurology", "Pediatrics"]
    },
    {
        hospitalId: "HSP002",
        name: "Dr. Baba Saheb Ambedkar Hospital",
        address: "Sector 6, Rohini, Delhi, 110085",
        phone: "011-27058110",
        email: "contact@bsah.in",
        departments: ["General Medicine", "Surgery", "ENT", "Dermatology"]
    },
    {
        hospitalId: "HSP003",
        name: "Sanjay Gandhi Memorial Hospital",
        address: "Mangolpuri S Block, Rohini, Delhi, 110083",
        phone: "011-27922545",
        email: "sghospital@yahoo.com",
        departments: ["Gynecology", "Pediatrics", "Radiology", "Oncology"]
    },
    {
        hospitalId: "HSP004",
        name: "Rajiv Gandhi Cancer Institute and Research Centre",
        address: "Sector 5, Rohini, Delhi, 110085",
        phone: "011-47022222",
        email: "info@rgci.org",
        departments: ["Oncology", "Radiology", "Surgery", "Palliative Care"]
    },
    {
        hospitalId: "HSP005",
        name: "Maharaja Agrasen Hospital",
        address: "Sector 1, Rohini, Delhi, 110085",
        phone: "011-47000000",
        email: "contact@maharajaagrasen.com",
        departments: ["Cardiology", "Orthopedics", "Urology", "Nephrology"]
    },
    {
        hospitalId: "HSP006",
        name: "Rajni Gupta Hospital",
        address: "Sector 11, Rohini, Delhi, 110085",
        phone: "011-27674550",
        email: "info@rghospital.com",
        departments: ["Cardiology", "Gynecology", "Orthopedics", "Pediatrics"]
    },
    {
        hospitalId: "HSP007",
        name: "Sri Balaji Action Medical Institute",
        address: "FC-34, A-4 Block, Paschim Vihar, Rohini, Delhi, 110085",
        phone: "011-45000000",
        email: "contact@balaji.com",
        departments: ["Cardiology", "Neurology", "Gastroenterology", "Nephrology"]
    },
    {
        hospitalId: "HSP008",
        name: "Saroj Super Speciality Hospital",
        address: "Sector 19, Rohini, Delhi, 110085",
        phone: "011-27903400",
        email: "info@sarojhospital.com",
        departments: ["Cardiology", "Orthopedics", "Neurology", "Pulmonology"]
    },
    {
        hospitalId: "HSP009",
        name: "Eternal Heart Care Centre",
        address: "Sector 14, Rohini, Delhi, 110085",
        phone: "011-27565656",
        email: "info@ehcc.com",
        departments: ["Cardiology", "Diabetology", "Pulmonology", "Nephrology"]
    },
    {
        hospitalId: "HSP010",
        name: "Jha Clinic",
        address: "Sector 16, Rohini, Delhi, 110085",
        phone: "011-27654567",
        email: "contact@jhaclinic.com",
        departments: ["General Medicine", "ENT", "Orthopedics", "Pediatrics"]
    },
    {
        hospitalId: "HSP011",
        name: "Saraswati Memorial Hospital",
        address: "Sector 17, Rohini, Delhi, 110085",
        phone: "011-27987845",
        email: "info@saraswatihospital.com",
        departments: ["General Surgery", "Gynecology", "Pediatrics", "Orthopedics"]
    },
    {
        hospitalId: "HSP012",
        name: "Mata Chanan Devi Hospital",
        address: "C-1, Janakpuri, Rohini, Delhi, 110085",
        phone: "011-25599555",
        email: "contact@matacmd.com",
        departments: ["Cardiology", "Neurology", "Oncology", "Urology"]
    },
    {
        hospitalId: "HSP013",
        name: "Deep Chand Bandhu Hospital",
        address: "Sector 15, Rohini, Delhi, 110085",
        phone: "011-27652467",
        email: "info@dcbhospital.com",
        departments: ["General Medicine", "Pediatrics", "Gynecology", "ENT"]
    },
    {
        hospitalId: "HSP014",
        name: "Bhagwati Hospital",
        address: "Sector 13, Rohini, Delhi, 110085",
        phone: "011-27954789",
        email: "contact@bhagwatihospital.com",
        departments: ["Cardiology", "Neurology", "Orthopedics", "Dermatology"]
    },
    {
        hospitalId: "HSP015",
        name: "Fortis Hospital",
        address: "Sector 18, Rohini, Delhi, 110085",
        phone: "011-27863456",
        email: "info@fortishospital.com",
        departments: ["Cardiology", "Oncology", "Neurosurgery", "Orthopedics"]
    },
    {
        hospitalId: "HSP016",
        name: "Max Super Speciality Hospital",
        address: "W-3, Sector 1, Rohini, Delhi, 110085",
        phone: "011-25467890",
        email: "contact@maxhospital.com",
        departments: ["Cardiology", "Neurology", "Oncology", "Gastroenterology"]
    },
    {
        hospitalId: "HSP017",
        name: "Bhatia Global Hospital",
        address: "Sector 12, Rohini, Delhi, 110085",
        phone: "011-27656789",
        email: "info@bhatiaglobal.com",
        departments: ["Cardiology", "Nephrology", "Orthopedics", "Pulmonology"]
    },
    {
        hospitalId: "HSP018",
        name: "Santom Hospital",
        address: "Sector 10, Rohini, Delhi, 110085",
        phone: "011-27892345",
        email: "contact@santomhospital.com",
        departments: ["General Surgery", "Pediatrics", "Gynecology", "Orthopedics"]
    },
    {
        hospitalId: "HSP019",
        name: "Rukmani Birla Hospital",
        address: "Sector 9, Rohini, Delhi, 110085",
        phone: "011-27867890",
        email: "info@rbhospital.com",
        departments: ["Cardiology", "Orthopedics", "Neurology", "Pediatrics"]
    },
    {
        hospitalId: "HSP020",
        name: "Muni Maya Ram Jain Hospital",
        address: "Sector 8, Rohini, Delhi, 110085",
        phone: "011-27998765",
        email: "contact@mrmjainhospital.com",
        departments: ["General Medicine", "Gynecology", "Pediatrics", "Orthopedics"]
    },
    {
        hospitalId: "HSP021",
        name: "Aakash Healthcare",
        address: "Sector 7, Rohini, Delhi, 110085",
        phone: "011-27567890",
        email: "info@aakashhealthcare.com",
        departments: ["Cardiology", "Orthopedics", "Neurology", "Nephrology"]
    },
    {
        hospitalId: "HSP022",
        name: "Shree Hospital",
        address: "Sector 5, Rohini, Delhi, 110085",
        phone: "011-27834567",
        email: "contact@shreehospital.com",
        departments: ["General Surgery", "Pediatrics", "Gynecology", "ENT"]
    },
    {
        hospitalId: "HSP023",
        name: "New Beginnings Hospital",
        address: "Sector 4, Rohini, Delhi, 110085",
        phone: "011-27651234",
        email: "info@newbeginnings.com",
        departments: ["Pediatrics", "Orthopedics", "Neurology", "Cardiology"]
    },
    {
        hospitalId: "HSP024",
        name: "Navjeevan Hospital",
        address: "Sector 3, Rohini, Delhi, 110085",
        phone: "011-27693456",
        email: "contact@navjeevan.com",
        departments: ["General Medicine", "Gynecology", "Pediatrics", "Dermatology"]
    },
    {
        hospitalId: "HSP025",
        name: "City Hospital",
        address: "Sector 2, Rohini, Delhi, 110085",
        phone: "011-27987654",
        email: "info@cityhospital.com",
        departments: ["Cardiology", "Neurology", "Orthopedics", "Oncology"]
    }
];

Hospital.insertMany(hospitalData)
    .then(() => {
        console.log('Data successfully added to the database');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error adding data to the database:', err);
    });
