import { Component } from '@angular/core';

@Component({
  selector: 'app-author-details',
  standalone: false,
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.css'
})
export class AuthorDetailsComponent {
  authorData = {
    profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@example.com',
    bio: 'Award-winning journalist with expertise in technology and business trends.',
    experience: 3,
    contactNumber: 9876543211,
    socialMedia: {
      twitter: '@sarahchen_j',
      facebook: 'sarahchen.journalist',
      instagram: 'sarahchen_writes'
    }
  };


}
