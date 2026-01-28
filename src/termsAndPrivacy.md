# Terms & Privacy
Review our Terms of Service and Privacy Policy. These legal documents outline the rules for using our service and how we collect, use, and protect your data.

<style>
.legal-documents h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.documents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    gap: 2rem;
}

.document-card {
    display: block;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    color: inherit;
    background: var(--card-bg);
    border: 1px solid hsl(0deg 0% 100% / 10%);
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	height: 100%;
}

.document-card:hover {
    transform: translateY(-5px);
    border-color: #4a6cf7;
    box-shadow: 0 10px 20px rgba(74, 108, 247, 0.15);
    text-decoration: none;
}

.document-card.tos:hover {
    border-color: #4a6cf7;
}

.document-card.ettp:hover {
    border-color: #10b981;
}

.document-card.marketplace:hover {
    border-color: #f59e0b;
}

.document-card.privacy:hover {
    border-color: #8b5cf6;
}

.doc-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.doc-header i {
    font-size: 2rem;
    color: #4a6cf7;
}

.document-card.ettp .doc-header i {
    color: #10b981;
}

.document-card.marketplace .doc-header i {
    color: #f59e0b;
}

.document-card.privacy .doc-header i {
    color: #8b5cf6;
}

.doc-title {
    font-size: 1.5rem;
    font-weight: 700;
	color: var(--text-primary);
}

.doc-content {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.doc-link {
    display: inline-block;
    color: #4a6cf7;
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.document-card:hover .doc-link {
    color: #3a56d5;
}

.document-card.ettp .doc-link {
    color: #10b981;
}

.document-card.marketplace .doc-link {
    color: #f59e0b;
}

.document-card.privacy .doc-link {
    color: #8b5cf6;
}

@media (max-width: 768px) {
  .documents-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .legal-documents h1 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
}
</style>

<div class="legal-documents">
  <h1>Legal Documents</h1>
  <div class="documents-grid">
    <a href="https://botdesignerdiscord.com/tos" class="document-card tos">
      <div class="doc-header">
        <i class="fa fa-file-contract" aria-hidden="true"></i>
        <span class="doc-title">Terms of Service</span>
      </div>
      <p class="doc-content">The official rules and guidelines for using our platform. Learn about user responsibilities and platform policies.</p>
      <span class="doc-link">Read full document →</span>
    </a>
    <a href="https://raw.githubusercontent.com/Rainb0wKey/bdfd-wiki/refs/heads/dev/external/entityTransferPolicy.txt" class="document-card ettp">
      <div class="doc-header">
        <i class="fa fa-shield-alt" aria-hidden="true"></i>
        <span class="doc-title">Entity Transfer Policy</span>
      </div>
      <p class="doc-content">Extended Terms & Third-Party Policies. Additional terms for specific services and third-party integrations.</p>
      <span class="doc-link">Read full document →</span>
    </a>
    <a href="https://botdesignerdiscord.com/template-store-tos" class="document-card marketplace">
      <div class="doc-header">
        <i class="fa fa-store" aria-hidden="true"></i>
        <span class="doc-title">Marketplace ToS</span>
      </div>
      <p class="doc-content">Terms specific to our code marketplace.</p>
      <span class="doc-link">Read full document →</span>
    </a>
    <a href="https://botdesignerdiscord.com/privacy-policy" class="document-card privacy">
      <div class="doc-header">
        <i class="fa fa-user-shield" aria-hidden="true"></i>
        <span class="doc-title">Privacy Policy</span>
      </div>
      <p class="doc-content">How we collect, use, and protect your personal data. Understand your privacy rights and our commitments.</p>
      <span class="doc-link">Read full document →</span>
    </a>
  </div>
</div>
