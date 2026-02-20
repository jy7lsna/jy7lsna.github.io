import { useState } from 'react';
import './PolaroidGallery.css';
import moments_1 from '../assets/moments/moments_1.jpg';
import moments_2 from '../assets/moments/moments_2.jpeg';
import moments_3 from '../assets/moments/moments_3.jpeg';

export default function PolaroidGallery() {
    const [papers, setPapers] = useState([
        { id: 1, title: "Attention Is All You Need", checked: true, url: "https://arxiv.org/abs/1706.03762" },
        { id: 2, title: "DeepSeek-V3 Technical Report", checked: true, url: "https://arxiv.org/abs/2412.19437" },
        { id: 3, title: "BitNet: Scaling 1-bit Transformers", checked: false, url: "https://arxiv.org/abs/2310.11453" },
        { id: 4, title: "Llama 3.1: The Herd of LLMs", checked: true, url: "https://ai.meta.com/blog/meta-llama-3-1/" },
        { id: 5, title: "Chain of Thought Prompting (Goog)", checked: false, url: "https://arxiv.org/abs/2201.11903" },
    ]);

    const togglePaper = (e, id) => {
        e.stopPropagation(); // Prevent link click when clicking checkbox
        setPapers(papers.map(p =>
            p.id === id ? { ...p, checked: !p.checked } : p
        ));
    };

    return (
        <div className="digest-page paper-texture">
            <header className="digest-header">
                <div className="digest-title-group">
                    <p className="digest-issue-no">// issue no. 002</p>
                    <h1 className="digest-main-title">
                        <span className="scribble-circle--bold" style={{ display: 'inline-block', padding: '0 15px' }}>february</span> to-do
                    </h1>
                </div>
            </header>

            <div className="digest-content">
                <div className="digest-left">
                    <section className="digest-section section--read">
                        <h2 className="section-title">research papers: <span style={{ color: 'var(--tab-pink)', fontSize: '0.8rem', marginLeft: '5px' }}>★</span></h2>
                        <ul className="digest-checkbox-list">
                            {papers.map(paper => (
                                <li key={paper.id} className="interactive-item paper-item">
                                    <span className={`checkbox ${paper.checked ? 'checked' : ''}`} onClick={(e) => togglePaper(e, paper.id)}>
                                        {paper.checked ? '[x]' : '[ ]'}
                                    </span>
                                    <a href={paper.url} target="_blank" rel="noopener noreferrer" className="digest-external-link">
                                        {paper.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="digest-section section--substack">
                        <h2 className="section-title">imp blogs: <span style={{ color: 'var(--tab-blue)', fontSize: '0.8rem', marginLeft: '5px' }}>✦</span></h2>
                        <a href="https://karpathy.github.io/2017/11/11/software2/" target="_blank" rel="noopener noreferrer" className="article-preview-link">
                            <div className="article-preview text-only">
                                <div className="article-text">
                                    <p>"software 2.0 and the future of coding"</p>
                                    <span className="article-author">// andrej karpathy's blog</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://lilianweng.github.io/posts/2023-06-23-agent/" target="_blank" rel="noopener noreferrer" className="article-preview-link">
                            <div className="article-preview text-only">
                                <div className="article-text">
                                    <p>"LLM powered autonomous agents"</p>
                                    <span className="article-author">// lilian weng (openai)</span>
                                </div>
                            </div>
                        </a>
                    </section>

                    <section className="digest-section section--stack">
                        <h2 className="section-title">currently learning:</h2>
                        <ul className="digest-list list--italic">
                            <li>pytorch, huggingface</li>
                            <li>ollama + deepseek-coder</li>
                            <li>vllm / tensorrt-llm</li>
                            <li>langchain + pinecone</li>
                        </ul>
                    </section>
                </div>

                <div className="digest-right">
                    <section className="digest-section section--in-out-card">
                        <div className="digest-in-out">
                            <div className="in-out-section">
                                <h3 className="in-out-title">in</h3>
                                <ul className="digest-list digest-list--small">
                                    <li>mixture of experts (moe)</li>
                                    <li><span className="scribble-highlight" style={{ '--scribble-color': 'var(--tab-blue)' }}>agentic workflows</span></li>
                                    <li><span className="scribble-highlight" style={{ '--scribble-color': 'var(--tab-pink)' }}>on-device inference</span></li>
                                </ul>
                            </div>
                            <div className="in-out-separator"></div>
                            <div className="in-out-section">
                                <h3 className="in-out-title">out</h3>
                                <ul className="digest-list digest-list--small">
                                    <li>closed source dominance</li>
                                    <li>prompt engineering hacks</li>
                                    <li>high-latency apis</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="digest-section section--watching">
                        <h2 className="section-title">watch list: <span style={{ color: 'var(--tab-yellow)', fontSize: '0.8rem', marginLeft: '5px' }}>★</span></h2>
                        <div className="video-horizontal-list">
                            <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" target="_blank" rel="noopener noreferrer" className="video-link-wrapper">
                                <div className="video-item">
                                    <div className="video-thumbnail">
                                        <img src="https://img.youtube.com/vi/kCc8FmEb1nY/maxresdefault.jpg" alt="GPT from Scratch Thumbnail" />
                                        <span className="video-duration">2:12:12</span>
                                    </div>
                                    <div className="video-info">
                                        <h3 className="video-title">Let's build GPT: <span className="scribble-underline">scratch</span></h3>
                                        <p className="video-meta">Andrej Karpathy</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=VMj-3S1tku0" target="_blank" rel="noopener noreferrer" className="video-link-wrapper">
                                <div className="video-item">
                                    <div className="video-thumbnail">
                                        <img src="https://img.youtube.com/vi/VMj-3S1tku0/maxresdefault.jpg" alt="Neural Nets Thumbnail" />
                                        <span className="video-duration">2:26:00</span>
                                    </div>
                                    <div className="video-info">
                                        <h3 className="video-title">The spelled-out intro</h3>
                                        <p className="video-meta">Andrej Karpathy</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section className="digest-section section--books">
                        <h2 className="section-title">to-read:</h2>
                        <div className="book-grid">
                            <a href="https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646" target="_blank" rel="noopener noreferrer" className="book-link-wrapper">
                                <div className="book-item">
                                    <div className="book-cover">
                                        <img src="https://covers.openlibrary.org/b/isbn/9781098125974-M.jpg" alt="Hands-On ML" />
                                    </div>
                                    <div className="book-info">
                                        <h3 className="book-title">Hands-On ML</h3>
                                        <p className="book-meta">Aurélien Géron</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.manning.com/books/grokking-algorithms" target="_blank" rel="noopener noreferrer" className="book-link-wrapper">
                                <div className="book-item">
                                    <div className="book-cover">
                                        <img src="https://covers.openlibrary.org/b/isbn/9781617292231-M.jpg" alt="Grokking Algorithms" />
                                    </div>
                                    <div className="book-info">
                                        <h3 className="book-title"><span className="scribble-circle">Grokking Algo</span></h3>
                                        <p className="book-meta">Aditya Bhargava</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781449373320/" target="_blank" rel="noopener noreferrer" className="book-link-wrapper">
                                <div className="book-item">
                                    <div className="book-cover">
                                        <img src="https://covers.openlibrary.org/b/isbn/9781449373320-M.jpg" alt="DDIA" />
                                    </div>
                                    <div className="book-info">
                                        <h3 className="book-title">DDIA</h3>
                                        <p className="book-meta">Martin Kleppmann</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank" rel="noopener noreferrer" className="book-link-wrapper">
                                <div className="book-item">
                                    <div className="book-cover">
                                        <img src="https://covers.openlibrary.org/b/isbn/9780132350884-M.jpg" alt="Clean Code" />
                                    </div>
                                    <div className="book-info">
                                        <h3 className="book-title">Clean Code</h3>
                                        <p className="book-meta">Robert C. Martin</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </div>

            <footer className="digest-footer">
                <div className="doing-section">
                    <h2 className="section-title">doing:</h2>
                    <p className="doing-text">deep-diving into andrej karpathy's 'neural networks' series... // status: focus mode</p>
                </div>
                <div className="digest-footer-meta">
                    <div className="digest-footer-date">last updated: {new Date().toLocaleDateString()}</div>
                    <div className="digest-pagination">02</div>
                </div>
            </footer>
        </div>
    );
}
