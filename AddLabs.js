const mongoose = require('mongoose');
const Lab = require('./Models/Labs'); 

mongoose.connect('mongodb+srv://shivanigs0210:Akanungo0602@cluster0.hvok4kt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const labData = [
    {
        labId: "LAB001",
        name: "Dr. Lal Path Labs",
        address: "Sector 14, Rohini, Delhi, 110085",
        phone: "011-27551234",
        email: "info@lalpathlabs.com",
        services: ["Blood Test", "Urine Test", "X-Ray", "ECG"]
    },
    {
        labId: "LAB002",
        name: "SRL Diagnostics",
        address: "Sector 13, Rohini, Delhi, 110085",
        phone: "011-27954789",
        email: "contact@srldiagnostics.com",
        services: ["Blood Test", "Urine Test", "CT Scan", "MRI"]
    },
    {
        labId: "LAB003",
        name: "Thyrocare",
        address: "Sector 16, Rohini, Delhi, 110085",
        phone: "011-27654567",
        email: "info@thyrocare.com",
        services: ["Blood Test", "Thyroid Test", "Diabetes Test", "Lipid Profile"]
    },
    {
        labId: "LAB004",
        name: "PathCare Labs",
        address: "Sector 11, Rohini, Delhi, 110085",
        phone: "011-27674550",
        email: "info@pathcarelabs.com",
        services: ["Blood Test", "Urine Test", "Stool Test", "Liver Function Test"]
    },
    {
        labId: "LAB005",
        name: "Metropolis Healthcare",
        address: "Sector 10, Rohini, Delhi, 110085",
        phone: "011-27892345",
        email: "contact@metropolis.com",
        services: ["Blood Test", "Urine Test", "MRI", "CT Scan"]
    },
    {
        labId: "LAB006",
        name: "Dr. Dang's Lab",
        address: "Sector 9, Rohini, Delhi, 110085",
        phone: "011-27867890",
        email: "info@drdangslab.com",
        services: ["Blood Test", "Urine Test", "Liver Function Test", "Kidney Function Test"]
    },
    {
        labId: "LAB007",
        name: "Quest Diagnostics",
        address: "Sector 12, Rohini, Delhi, 110085",
        phone: "011-27656789",
        email: "info@questdiagnostics.com",
        services: ["Blood Test", "Urine Test", "ECG", "X-Ray"]
    },
    {
        labId: "LAB008",
        name: "Vijaya Diagnostic Centre",
        address: "Sector 15, Rohini, Delhi, 110085",
        phone: "011-27652467",
        email: "info@vijayadiagnostic.com",
        services: ["Blood Test", "Urine Test", "CT Scan", "MRI"]
    },
    {
        labId: "LAB009",
        name: "City X-Ray & Scan Clinic",
        address: "Sector 8, Rohini, Delhi, 110085",
        phone: "011-27998765",
        email: "contact@cityxrayclinic.com",
        services: ["Blood Test", "Urine Test", "X-Ray", "CT Scan"]
    },
    {
        labId: "LAB010",
        name: "House of Diagnostics",
        address: "Sector 7, Rohini, Delhi, 110085",
        phone: "011-27567890",
        email: "info@houseofdiagnostics.com",
        services: ["Blood Test", "Urine Test", "MRI", "ECG"]
    },
    {
        labId: "LAB011",
        name: "Aarthi Scans and Labs",
        address: "Sector 6, Rohini, Delhi, 110085",
        phone: "011-27058110",
        email: "contact@aarthiscans.com",
        services: ["Blood Test", "CT Scan", "MRI", "Ultrasound"]
    },
    {
        labId: "LAB012",
        name: "Unipath Specialty Laboratory",
        address: "Sector 5, Rohini, Delhi, 110085",
        phone: "011-27834567",
        email: "info@unipath.in",
        services: ["Blood Test", "Urine Test", "X-Ray", "ECG"]
    },
    {
        labId: "LAB013",
        name: "Dr. Avinash Phadke Labs",
        address: "Sector 4, Rohini, Delhi, 110085",
        phone: "011-27651234",
        email: "info@phadkelabs.com",
        services: ["Blood Test", "Urine Test", "Liver Function Test", "Kidney Function Test"]
    },
    {
        labId: "LAB014",
        name: "Suburban Diagnostics",
        address: "Sector 3, Rohini, Delhi, 110085",
        phone: "011-27693456",
        email: "contact@suburbandiagnostics.com",
        services: ["Blood Test", "Urine Test", "CT Scan", "MRI"]
    },
    {
        labId: "LAB015",
        name: "Suraksha Diagnostic",
        address: "Sector 2, Rohini, Delhi, 110085",
        phone: "011-27987654",
        email: "info@surakshanet.com",
        services: ["Blood Test", "Urine Test", "ECG", "X-Ray"]
    },
    {
        labId: "LAB016",
        name: "Apex Diagnostics",
        address: "Sector 1, Rohini, Delhi, 110085",
        phone: "011-27954789",
        email: "contact@apexdiagnostics.com",
        services: ["Blood Test", "Urine Test", "CT Scan", "MRI"]
    },
    {
        labId: "LAB017",
        name: "Precision Diagnostics",
        address: "Sector 18, Rohini, Delhi, 110085",
        phone: "011-27863456",
        email: "info@precisiondiagnostics.com",
        services: ["Blood Test", "Urine Test", "Liver Function Test", "Kidney Function Test"]
    },
    {
        labId: "LAB018",
        name: "North Delhi Diagnostics",
        address: "Sector 17, Rohini, Delhi, 110085",
        phone: "011-27987845",
        email: "info@northdelhidiagnostics.com",
        services: ["Blood Test", "Urine Test", "X-Ray", "ECG"]
    },
    {
        labId: "LAB019",
        name: "Spectrum Pathology Lab",
        address: "Sector 19, Rohini, Delhi, 110085",
        phone: "011-27903400",
        email: "contact@spectrumlab.com",
        services: ["Blood Test", "Urine Test", "CT Scan", "MRI"]
    },
    {
        labId: "LAB020",
        name: "Gagan Path Lab",
        address: "Sector 20, Rohini, Delhi, 110085",
        phone: "011-27997654",
        email: "info@gaganpathlab.com",
        services: ["Blood Test", "Urine Test", "Liver Function Test", "Kidney Function Test"]
    },
    {
        labId: "LAB021",
        name: "Apollo Diagnostics",
        address: "Sector 21, Rohini, Delhi, 110085",
        phone: "011-27887890",
        email: "info@apollodiagnostics.com",
        services: ["Blood Test", "Urine Test", "X-Ray", "ECG"]
    },
    {
        labId: "LAB022",
        name: "Niramaya PathLabs",
        address: "Sector 22, Rohini, Delhi, 110085",
        phone: "011-27557890",
        email: "info@niramayapathlabs.com",
        services: ["Blood Test", "Urine Test", "CT Scan", "MRI"]
    },
    {
        labId: "LAB023",
        name: "Core Diagnostics",
        address: "Sector 23, Rohini, Delhi, 110085",
        phone: "011-27923456",
        email: "info@corediagnostics.com",
        services: ["Blood Test", "Urine Test", "Liver Function Test", "Kidney Function Test"]
    },
    {
        labId: "LAB024",
        name: "iGenetic Diagnostics",
        address: "Sector 24, Rohini, Delhi, 110085",
        phone: "011-27965432",
        email: "contact@igenetic.com",
        services: ["Blood Test", "Urine Test", "X-Ray", "ECG"]
    },
    {
        labId: "LAB025",
        name: "Healthians",
        address: "Sector 25, Rohini, Delhi, 110085",
        phone: "011-27871234",
        email: "info@healthians.com",
        services: ["Blood Test", "Urine Test", "CT Scan", "MRI"]
    }
];

Lab.insertMany(labData)
    .then(() => {
        console.log('Lab data successfully added to the database');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error adding lab data to the database:', err);
    });
