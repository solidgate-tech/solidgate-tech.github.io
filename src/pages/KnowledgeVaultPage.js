import { AudioPlayer } from "../components/ui/AudioPlayer";
import { Card } from "../components/ui/Card";
import { Chip, ChipList } from "../components/ui/Chip";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BOOKS, BOOKS_SECTION } from "../data/books";
import { MEDIA, MEDIA_SECTION } from "../data/media";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "../data/testimonials";
import styles from "./KnowledgeVaultPage.module.css";

function Media() {
  return (
    <section className={`container ${styles.firstSection}`} aria-labelledby="media-title">
      <SectionHeader id="media-title" as="h1" title={MEDIA_SECTION.title} />
      <div className={styles.grid}>
        {MEDIA.map((item) => (
          <Card
            key={item.href}
            as="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            interactive
            className={styles.mediaCard}
          >
            <h3 className={styles.mediaTitle}>{item.title}</h3>
            <p className={styles.mediaAuthor}>{item.author}</p>
            <ChipList className={styles.mediaTags}>
              {item.tags.map((tag) => (
                <Chip key={tag} size="lg">
                  {tag}
                </Chip>
              ))}
            </ChipList>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section container" aria-labelledby="testimonials-title">
      <SectionHeader id="testimonials-title" title={TESTIMONIALS_SECTION.title} />
      <div className={styles.testimonials}>
        {TESTIMONIALS.map((person) => (
          <article key={person.fullName} className={styles.testimonial}>
            <img src={person.photoUrl} alt={`${person.fullName} avatar`} className={styles.photo} />
            <div className={styles.testimonialBody}>
              <p className={styles.testimonialText}>{person.description}</p>
              <div className={styles.clips}>
                {person.clips.map((clip) => (
                  <div key={clip.src} className={styles.clip}>
                    <p className={styles.clipQuestion}>{clip.question}</p>
                    <AudioPlayer src={clip.src} label={clip.question} />
                  </div>
                ))}
              </div>
              <p className={styles.person}>
                {person.name}, {person.role}
                {person.linkedinUrl && (
                  <a
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedin}
                    aria-label={`${person.fullName} on LinkedIn`}
                  >
                    LinkedIn
                  </a>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const tiltCover = (e) => {
  const direction = Math.random() > 0.5 ? 1 : -1;
  const angle = (Math.random() * 3 + 2) * direction; // 2-5 degrees
  e.currentTarget.style.setProperty("--tilt", `${angle}deg`);
};

const resetCover = (e) => {
  e.currentTarget.style.setProperty("--tilt", "0deg");
};

function Books() {
  return (
    <section className="section container" aria-labelledby="books-title">
      <SectionHeader id="books-title" title={BOOKS_SECTION.title} />
      <div className={`${styles.grid} ${styles.booksGrid}`}>
        {BOOKS.map((book) => (
          <Card
            key={book.title}
            as="article"
            className={styles.bookCard}
            onMouseEnter={tiltCover}
            onMouseLeave={resetCover}
          >
            <div className={styles.cover}>
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthors}>by {book.authors}</p>
              <p className={styles.bookDescription}>{book.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function KnowledgeVaultPage() {
  return (
    <>
      <Media />
      <Testimonials />
      <Books />
    </>
  );
}
