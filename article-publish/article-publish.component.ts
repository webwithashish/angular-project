import { Component } from '@angular/core';

interface PendingArticle {
  id: string;
  title: string;
  subheading: string;
  content: string;
  author: string;
  category: string;
  submittedDate: Date;
}

@Component({
  selector: 'app-article-publish',
  standalone: false,
  templateUrl: './article-publish.component.html',
  styleUrl: './article-publish.component.css'
})
export class ArticlePublishComponent {
  viewFullContent: boolean = false;
  pendingArticles: PendingArticle[] = [
    {
      id: '1',
      title: 'The Future of Renewable Energy',
      subheading: 'How solar technology is evolving in 2024',
      content: 'Full article content goes here...',
      author: 'Dr. Emily Johnson',
      category: 'Technology',
      submittedDate: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'Modern Football Tactics',
      subheading: 'How AI is changing team strategies',
      content: 'Full article content goes here...',
      author: 'James Wilson',
      category: 'Sports',
      submittedDate: new Date('2024-01-10')
    }
  ];

  publishArticle(articleId: string) {
    // In real app: Call service to publish
    this.pendingArticles = this.pendingArticles.filter(a => a.id !== articleId);
    console.log('Published article:', articleId);
    // Add toast notification in real app
  }

  rejectArticle(articleId: string) {
    // In real app: Call service to reject
    this.pendingArticles = this.pendingArticles.filter(a => a.id !== articleId);
    console.log('Rejected article:', articleId);
  }


}
