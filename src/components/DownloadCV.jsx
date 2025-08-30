import Link from 'next/link';

function CVDownload() {
  return (
    <div>
      <Link href="/resume.pdf" download="Resume.pdf">
        Download CV
      </Link>
    </div>
  );
}

export default CVDownload;


