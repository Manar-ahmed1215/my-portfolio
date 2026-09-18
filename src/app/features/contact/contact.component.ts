import { CommonModule } from '@angular/common';
import { Component, computed, input, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  isDarkMode = input<boolean>(true);

  private formEndpoint = 'https://api.web3forms.com/submit';
  private accessKey = '1deff8cc-5478-4b96-bb00-0710f8b49a9b'; 

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-white text-slate-900');
  titleClass = computed(() => this.isDarkMode() ? 'text-white' : 'text-slate-900');
  textMuted = computed(() => this.isDarkMode() ? 'text-slate-400' : 'text-slate-600');
  cardClass = computed(() => this.isDarkMode() ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg');
  
  inputClass = computed(() => this.isDarkMode()
    ? 'bg-slate-950/60 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500'
    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
  );

  openGmail() {
    const email = 'manarahmedashour.dev@gmail.com';
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(url, '_blank');
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const formData = {
      ...this.contactForm.value,
      access_key: this.accessKey
    };

    this.http.post(this.formEndpoint, formData).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        this.submitStatus = 'success';
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitStatus = 'error';
      }
    });
  }
}