import { Component } from '@angular/core';

@Component({
  selector: 'app-view-article',
  standalone: false,
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css'
})
export class ViewArticleComponent {
  article = {
    title: 'The Future of AI in Healthcare',
    subheading: 'How artificial intelligence is revolutionizing patient care',
    content: `Artificial intelligence is transforming healthcare in unprecedented ways... [full article content]`,
    publishedDate: new Date('2023-11-15'),
    likes: 42,
    rating: 4.5,
    saved: false
  };

  // Sample author data
  author = {
    name: 'Dr. Sarah Chen',
    profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
    email: 'sarah.chen@example.com',
    bio: 'Award-winning journalist with 10+ years experience in health tech',
    experience: 7, // Years
    contact: '555-123-4567',
    social: {
      twitter: '@sarahchen_ai',
      facebook: 'sarahchen.health',
      instagram: 'dr.sarahchen'
    }
  };

  constructor() { }

  navigateToAuthor() {
    // Pass author data to the author view component
   
  }

  toggleSave() {
    this.article.saved = !this.article.saved;
  }

  rateArticle(rating: number) {
    this.article.rating = rating;
  }
}
