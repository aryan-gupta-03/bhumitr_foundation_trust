// Simple configuration file - update these values as needed

export const donationConfig = {
  upi: {
    id: 'bhumitrfoundation@paytm', // Replace with your UPI ID
    qrCode: 'https://drive.google.com/file/d/1-QXB0QLVbnwJDOh6OoMACE6gV8SovKt1/view?usp=drive_link', // Google Drive image ID
  },
  bank: {
    accountName: 'Bhumitr Foundation Trust',
    accountNumber: 'XXXXXXXXXXXX', // Replace with actual account number
    ifsc: 'XXXX0000000', // Replace with actual IFSC code
    bankName: 'Bank Name', // Replace with actual bank name
    branch: 'Branch Name', // Replace with actual branch
  },
  contact: {
    email: 'bhumitrfoundationtrust@gmail.com',
    phone: '+91 xxxxxxxxxx',
    whatsapp: '+91 xxxxxxxxxx', // Optional
  },
  volunteer: {
    whatsappGroup: 'https://chat.whatsapp.com/', // WhatsApp group invite link
    // To get this: Open WhatsApp group → Group info → Invite via link → Copy link
  },
}

export const googleDriveConfig = {
  // Google Drive folder ID where images are stored
  // To get this: Open Google Drive folder → Share → Get link → Extract folder ID
  folderId: 'YOUR_GOOGLE_DRIVE_FOLDER_ID',
  // Or use direct image IDs
  galleryImages: [
    {
      id: '1',
      driveId: 'https://drive.google.com/file/d/1-QXB0QLVbnwJDOh6OoMACE6gV8SovKt1/view?usp=drive_link', // Google Drive file ID
      caption: 'Food distribution drive',
    },
    {
      id: '2',
      driveId: 'https://drive.google.com/file/d/1-QXB0QLVbnwJDOh6OoMACE6gV8SovKt1/view?usp=drive_link',
      caption: 'Clothing donation event',
    },
    // Add more images as needed
  ],
}

export const upcomingDrives = [
  {
    id: '1',
    title: 'Winter Clothing Drive',
    description: 'Collecting warm clothes for families in need this winter season.',
    date: '2024-12-20',
    location: 'Jammu City Center',
    category: 'CLOTHING',
  },
  {
    id: '2',
    title: 'Education Kit Distribution',
    description: 'Distributing books and stationery to underprivileged students.',
    date: '2024-12-25',
    location: 'Multiple Locations',
    category: 'EDUCATION',
  },
]

// Recent activities to showcase on homepage
export const recentActivities = [
  {
    id: '1',
    title: 'Breakfast Distribution Drive',
    date: '2024-12-15',
    location: 'Jammu City',
    participants: 50,
    impact: '600+ plates served',
    driveId: 'YOUR_IMAGE_ID_1', // Google Drive image ID
    category: 'FOOD',
  },
  {
    id: '2',
    title: 'Winter Clothing Collection',
    date: '2024-12-10',
    location: 'Multiple Locations',
    participants: 30,
    impact: '500+ clothes collected',
    driveId: 'YOUR_IMAGE_ID_2',
    category: 'CLOTHING',
  },
  {
    id: '3',
    title: 'Education Kit Distribution',
    date: '2024-12-05',
    location: 'Flood-affected areas',
    participants: 25,
    impact: '200+ students helped',
    driveId: 'YOUR_IMAGE_ID_3',
    category: 'EDUCATION',
  },
]

