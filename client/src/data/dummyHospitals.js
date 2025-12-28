export const DUMMY_HOSPITALS = [
    // --- USA (New York) ---
    { id: '1', name: "City General Hospital", location: { lat: 40.7128, lng: -74.0060 }, address: "123 Broadway, New York, NY, USA", currentQueue: 10, avgServiceTime: 15, predictedWait: 150, crowdLevel: "red", priority: "High" },
    { id: '2', name: "St. Mary's Medical Center", location: { lat: 40.7300, lng: -73.9950 }, address: "456 Park Ave, Brooklyn, NY, USA", currentQueue: 2, avgServiceTime: 12, predictedWait: 24, crowdLevel: "green", priority: "Normal" },
    { id: '3', name: "Downtown Urgent Care", location: { lat: 40.7500, lng: -73.9800 }, address: "789 Main St, Jersey City, NJ, USA", currentQueue: 5, avgServiceTime: 10, predictedWait: 50, crowdLevel: "yellow", priority: "Medium" },
    { id: '4', name: "Westside Medical", location: { lat: 40.7600, lng: -73.9900 }, address: "321 West Ave, Manhattan, NY, USA", currentQueue: 8, avgServiceTime: 20, predictedWait: 160, crowdLevel: "red", priority: "High" },
    { id: '5', name: "Brooklyn Health Center", location: { lat: 40.6500, lng: -73.9500 }, address: "555 Flatbush Ave, Brooklyn, NY, USA", currentQueue: 1, avgServiceTime: 15, predictedWait: 15, crowdLevel: "green", priority: "Low" },
    { id: '6', name: "Queens Hospital Center", location: { lat: 40.7000, lng: -73.8000 }, address: "82-68 164th St, Queens, NY, USA", currentQueue: 15, avgServiceTime: 18, predictedWait: 270, crowdLevel: "red", priority: "High" },
    { id: '7', name: "Bronx Lebanon Hospital", location: { lat: 40.8400, lng: -73.9100 }, address: "1650 Grand Concourse, Bronx, NY, USA", currentQueue: 3, avgServiceTime: 12, predictedWait: 36, crowdLevel: "green", priority: "Normal" },
    { id: '8', name: "Staten Island University Hospital", location: { lat: 40.5800, lng: -74.0800 }, address: "475 Seaview Ave, Staten Island, NY, USA", currentQueue: 6, avgServiceTime: 20, predictedWait: 120, crowdLevel: "yellow", priority: "Medium" },

    // --- USA (California) ---
    { id: '9', name: "UCLA Medical Center", location: { lat: 34.0600, lng: -118.4400 }, address: "757 Westwood Plaza, Los Angeles, CA, USA", currentQueue: 12, avgServiceTime: 25, predictedWait: 300, crowdLevel: "red", priority: "High" },
    { id: '10', name: "Cedars-Sinai Medical Center", location: { lat: 34.0700, lng: -118.3800 }, address: "8700 Beverly Blvd, Los Angeles, CA, USA", currentQueue: 4, avgServiceTime: 15, predictedWait: 60, crowdLevel: "yellow", priority: "Medium" },
    { id: '11', name: "UCSF Medical Center", location: { lat: 37.7600, lng: -122.4500 }, address: "505 Parnassus Ave, San Francisco, CA, USA", currentQueue: 2, avgServiceTime: 10, predictedWait: 20, crowdLevel: "green", priority: "Low" },
    { id: '12', name: "Stanford Health Care", location: { lat: 37.4300, lng: -122.1700 }, address: "300 Pasteur Dr, Stanford, CA, USA", currentQueue: 7, avgServiceTime: 20, predictedWait: 140, crowdLevel: "yellow", priority: "Medium" },

    // --- UK (London) ---
    { id: '13', name: "Royal London Hospital", location: { lat: 51.5194, lng: -0.0597 }, address: "Whitechapel Rd, London, UK", currentQueue: 12, avgServiceTime: 18, predictedWait: 216, crowdLevel: "red", priority: "High" },
    { id: '14', name: "St Thomas' Hospital", location: { lat: 51.5003, lng: -0.1186 }, address: "Westminster Bridge Rd, London, UK", currentQueue: 4, avgServiceTime: 15, predictedWait: 60, crowdLevel: "yellow", priority: "Medium" },
    { id: '15', name: "Guy's Hospital", location: { lat: 51.5046, lng: -0.0860 }, address: "Great Maze Pond, London, UK", currentQueue: 6, avgServiceTime: 12, predictedWait: 72, crowdLevel: "yellow", priority: "Medium" },
    { id: '16', name: "King's College Hospital", location: { lat: 51.4670, lng: -0.0930 }, address: "Denmark Hill, London, UK", currentQueue: 18, avgServiceTime: 20, predictedWait: 360, crowdLevel: "red", priority: "High" },
    { id: '17', name: "Chelsea and Westminster", location: { lat: 51.4870, lng: -0.1910 }, address: "369 Fulham Rd, London, UK", currentQueue: 1, avgServiceTime: 10, predictedWait: 10, crowdLevel: "green", priority: "Low" },

    // --- India ---
    { id: '18', name: "AIIMS Delhi", location: { lat: 28.5672, lng: 77.2100 }, address: "Ansari Nagar, New Delhi, India", currentQueue: 45, avgServiceTime: 10, predictedWait: 450, crowdLevel: "red", priority: "High" },
    { id: '19', name: "Apollo Hospital Mumbai", location: { lat: 19.0167, lng: 73.0227 }, address: "Parsik Hill Rd, Mumbai, India", currentQueue: 8, avgServiceTime: 20, predictedWait: 160, crowdLevel: "yellow", priority: "Medium" },
    { id: '20', name: "Fortis Bangalore", location: { lat: 12.9345, lng: 77.6101 }, address: "Bannerghatta Rd, Bangalore, India", currentQueue: 3, avgServiceTime: 15, predictedWait: 45, crowdLevel: "green", priority: "Normal" },
    { id: '21', name: "Medanta - The Medicity", location: { lat: 28.4200, lng: 77.0400 }, address: "CH Baktawar Singh Rd, Gurgaon, India", currentQueue: 10, avgServiceTime: 12, predictedWait: 120, crowdLevel: "yellow", priority: "Medium" },
    { id: '22', name: "Lilavati Hospital", location: { lat: 19.0500, lng: 72.8200 }, address: "Bandra West, Mumbai, India", currentQueue: 20, avgServiceTime: 15, predictedWait: 300, crowdLevel: "red", priority: "High" },
    { id: '23', name: "Christian Medical College", location: { lat: 12.9200, lng: 79.1300 }, address: "Ida Scudder Rd, Vellore, India", currentQueue: 30, avgServiceTime: 8, predictedWait: 240, crowdLevel: "red", priority: "High" },

    // --- Canada ---
    { id: '24', name: "Toronto General Hospital", location: { lat: 43.6596, lng: -79.3884 }, address: "200 Elizabeth St, Toronto, Canada", currentQueue: 6, avgServiceTime: 25, predictedWait: 150, crowdLevel: "yellow", priority: "High" },
    { id: '25', name: "Vancouver General Hospital", location: { lat: 49.2612, lng: -123.1245 }, address: "899 W 12th Ave, Vancouver, Canada", currentQueue: 2, avgServiceTime: 20, predictedWait: 40, crowdLevel: "green", priority: "Normal" },
    { id: '26', name: "Mount Sinai Hospital", location: { lat: 43.6500, lng: -79.3900 }, address: "600 University Ave, Toronto, Canada", currentQueue: 5, avgServiceTime: 15, predictedWait: 75, crowdLevel: "green", priority: "Normal" },
    { id: '27', name: "Montreal General Hospital", location: { lat: 45.5000, lng: -73.5900 }, address: "1650 Cedar Ave, Montreal, Canada", currentQueue: 9, avgServiceTime: 18, predictedWait: 162, crowdLevel: "yellow", priority: "Medium" },

    // --- Australia ---
    { id: '28', name: "Royal Melbourne Hospital", location: { lat: -37.7991, lng: 144.9555 }, address: "300 Grattan St, Melbourne, Australia", currentQueue: 7, avgServiceTime: 15, predictedWait: 105, crowdLevel: "yellow", priority: "Medium" },
    { id: '29', name: "Sydney Hospital", location: { lat: -33.8688, lng: 151.2128 }, address: "8 Macquarie St, Sydney, Australia", currentQueue: 15, avgServiceTime: 12, predictedWait: 180, crowdLevel: "red", priority: "High" },
    { id: '30', name: "Alfred Hospital", location: { lat: -37.8400, lng: 144.9800 }, address: "55 Commercial Rd, Melbourne, Australia", currentQueue: 3, avgServiceTime: 20, predictedWait: 60, crowdLevel: "green", priority: "Low" },
    { id: '31', name: "Royal Brisbane Hospital", location: { lat: -27.4400, lng: 153.0200 }, address: "Butterfield St, Herston, Australia", currentQueue: 8, avgServiceTime: 15, predictedWait: 120, crowdLevel: "yellow", priority: "Medium" },

    // --- Germany ---
    { id: '32', name: "Charité - Universitätsmedizin", location: { lat: 52.5250, lng: 13.3770 }, address: "Charitéplatz 1, Berlin, Germany", currentQueue: 5, avgServiceTime: 20, predictedWait: 100, crowdLevel: "yellow", priority: "Medium" },
    { id: '33', name: "University Hospital Munich", location: { lat: 48.1300, lng: 11.5400 }, address: "Marchioninistraße 15, Munich, Germany", currentQueue: 2, avgServiceTime: 15, predictedWait: 30, crowdLevel: "green", priority: "Low" },
    { id: '34', name: "Heidelberg University Hospital", location: { lat: 49.4100, lng: 8.6900 }, address: "Im Neuenheimer Feld 672, Heidelberg, Germany", currentQueue: 6, avgServiceTime: 18, predictedWait: 108, crowdLevel: "yellow", priority: "Medium" },

    // --- France ---
    { id: '35', name: "Hôpital de la Pitié-Salpêtrière", location: { lat: 48.8300, lng: 2.3600 }, address: "47-83 Bd de l'Hôpital, Paris, France", currentQueue: 14, avgServiceTime: 15, predictedWait: 210, crowdLevel: "red", priority: "High" },
    { id: '36', name: "Hôpital Européen Georges-Pompidou", location: { lat: 48.8300, lng: 2.2700 }, address: "20 Rue Leblanc, Paris, France", currentQueue: 4, avgServiceTime: 20, predictedWait: 80, crowdLevel: "yellow", priority: "Medium" },
    { id: '37', name: "Hôpital Nord", location: { lat: 43.3700, lng: 5.3600 }, address: "Chemin des Bourrely, Marseille, France", currentQueue: 3, avgServiceTime: 12, predictedWait: 36, crowdLevel: "green", priority: "Low" },

    // --- Japan ---
    { id: '38', name: "University of Tokyo Hospital", location: { lat: 35.7100, lng: 139.7600 }, address: "7-3-1 Hongo, Bunkyo City, Tokyo, Japan", currentQueue: 25, avgServiceTime: 10, predictedWait: 250, crowdLevel: "red", priority: "High" },
    { id: '39', name: "St. Luke's International Hospital", location: { lat: 35.6600, lng: 139.7700 }, address: "9-1 Akashicho, Chuo City, Tokyo, Japan", currentQueue: 5, avgServiceTime: 15, predictedWait: 75, crowdLevel: "yellow", priority: "Medium" },
    { id: '40', name: "Osaka University Hospital", location: { lat: 34.8200, lng: 135.5200 }, address: "2-15 Yamadaoka, Suita, Osaka, Japan", currentQueue: 2, avgServiceTime: 20, predictedWait: 40, crowdLevel: "green", priority: "Low" },

    // --- UAE ---
    { id: '41', name: "Cleveland Clinic Abu Dhabi", location: { lat: 24.5000, lng: 54.3800 }, address: "Al Maryah Island, Abu Dhabi, UAE", currentQueue: 3, avgServiceTime: 25, predictedWait: 75, crowdLevel: "green", priority: "Normal" },
    { id: '42', name: "Rashid Hospital", location: { lat: 25.2300, lng: 55.3200 }, address: "Oud Metha, Dubai, UAE", currentQueue: 10, avgServiceTime: 15, predictedWait: 150, crowdLevel: "yellow", priority: "Medium" },
    { id: '43', name: "American Hospital Dubai", location: { lat: 25.2300, lng: 55.3100 }, address: "19th St, Dubai, UAE", currentQueue: 1, avgServiceTime: 10, predictedWait: 10, crowdLevel: "green", priority: "Low" },

    // --- Brazil ---
    { id: '44', name: "Hospital Israelita Albert Einstein", location: { lat: -23.6000, lng: -46.7100 }, address: "Av. Albert Einstein, 627, São Paulo, Brazil", currentQueue: 8, avgServiceTime: 20, predictedWait: 160, crowdLevel: "yellow", priority: "Medium" },
    { id: '45', name: "Hospital Sírio-Libanês", location: { lat: -23.5500, lng: -46.6500 }, address: "Rua Dona Adma Jafet, 91, São Paulo, Brazil", currentQueue: 4, avgServiceTime: 15, predictedWait: 60, crowdLevel: "green", priority: "Normal" },
    { id: '46', name: "Copa D'Or", location: { lat: -22.9600, lng: -43.1800 }, address: "Rua Figueiredo de Magalhães, 875, Rio de Janeiro, Brazil", currentQueue: 6, avgServiceTime: 18, predictedWait: 108, crowdLevel: "yellow", priority: "Medium" },

    // --- South Africa ---
    { id: '47', name: "Groote Schuur Hospital", location: { lat: -33.9400, lng: 18.4600 }, address: "Main Rd, Observatory, Cape Town, South Africa", currentQueue: 15, avgServiceTime: 15, predictedWait: 225, crowdLevel: "red", priority: "High" },
    { id: '48', name: "Chris Hani Baragwanath", location: { lat: -26.2600, lng: 27.9400 }, address: "26 Chris Hani Rd, Johannesburg, South Africa", currentQueue: 50, avgServiceTime: 8, predictedWait: 400, crowdLevel: "red", priority: "High" },
    { id: '49', name: "Netcare St Augustine's", location: { lat: -29.8500, lng: 30.9900 }, address: "107 JB Marks Rd, Durban, South Africa", currentQueue: 5, avgServiceTime: 20, predictedWait: 100, crowdLevel: "yellow", priority: "Medium" },

    // --- Singapore ---
    { id: '50', name: "Singapore General Hospital", location: { lat: 1.2700, lng: 103.8300 }, address: "Outram Rd, Singapore", currentQueue: 9, avgServiceTime: 15, predictedWait: 135, crowdLevel: "yellow", priority: "Medium" },
    { id: '51', name: "Mount Elizabeth Hospital", location: { lat: 1.3000, lng: 103.8300 }, address: "3 Mount Elizabeth, Singapore", currentQueue: 2, avgServiceTime: 20, predictedWait: 40, crowdLevel: "green", priority: "Low" }
];
