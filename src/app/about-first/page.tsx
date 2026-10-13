import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FIRST®",
};

export default function AboutFirst() {
  return (
    <div className="max-w-300 px-16 max-[900px]:px-6 w-full">
      <section className="my-16 font-heading uppercase text-4xl text-center">
        “It&rsquo;s More Than Robots”
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">What is FIRST®?</h3>
        <p>
          FIRST® (For the Inspiration and Recognition of Science and
          Technologies) is a global nonprofit organization dedicated to engaging
          youth in STEM education through hands-on, project-based learning.
          Since 1989, FIRST® has inspired millions of students worldwide to
          explore science, technology, engineering, and math through exciting
          competitions and programs.
        </p>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">FIRST®&rsquo;s Mission</h3>
        <p>
          FIRST®&apos;s mission is to foster an interest in STEM fields among
          young people while teaching them essential life skills and values.
          Through its programs, students learn not only technical abilities but
          also critical thinking, teamwork, problem-solving, and leadership.
        </p>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Gracious Professionalism®
            </h4>
            <p>
              This philosophy combines technical excellence with character
              development. It emphasizes being respectful, courteous, and
              professional while pursuing excellence in all endeavors. Gracious
              Professionalism teaches students to strive for perfection while
              maintaining grace under pressure and respect for others.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Coopertition®</h4>
            <p>
              Coopertition (cooperation + competition) is a unique concept where
              teams compete fiercely yet support each other. Teams are
              encouraged to share information, offer help to struggling
              competitors, and learn from one another. This creates a positive
              learning environment where everyone wins.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">FIRST® Programs</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>FIRST® LEGO® League Exploration:</strong> For children ages
            4-10, introducing basic STEM concepts through play and discovery.
          </li>
          <li>
            <strong>FIRST® LEGO® League Challenge:</strong> For children ages
            9-16, focusing on the engineering design process and real-world
            problem solving.
          </li>
          <li>
            <strong>FIRST® Tech Challenge:</strong> For high school students
            exploring technology innovation.
          </li>
          <li>
            <strong>FIRST® Robotics Competition (FRC):</strong> For high school
            teams building and programming complex robots to compete in annual
            championships.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Impact & Achievements</h3>
        <p>
          Over three decades, FIRST® has reached students in over 100 countries
          and territories. The organization has helped countless students pursue
          careers in STEM fields, with alumni including Nobel Prize winners,
          astronauts, entrepreneurs, and leaders in various industries. Research
          shows that FIRST® participants earn higher grades in math and science,
          have greater aspirations for college, and develop stronger social
          skills and teamwork abilities.
        </p>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Why Join FIRST®?</h3>
        <p>
          Whether you&rsquo;re a student, parent, educator, or business leader,
          FIRST® offers opportunities to:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Inspire the next generation of innovators and leaders</li>
          <li>Build hands-on STEM projects with peers</li>
          <li>
            Compete in exciting regional, national, and international events
          </li>
          <li>Develop teamwork and problem-solving skills</li>
          <li>Create positive connections with like-minded individuals</li>
          <li>Learn from mentors and experienced coaches</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Media & Resources</h3>
        <p>
          To gain deeper insights into the FRC program and FIRST®&apos;s impact,
          watch the acclaimed 2022 documentary{" "}
          <strong>&ldquo;More Than Robots&rdquo;</strong>, available on Disney+.
          The film showcases the dedication, innovation, and character
          development of participants across all levels of FIRST®.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
        <p>
          Visit{" "}
          <strong>
            <a
              href="https://firstinspires.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              firstinspires.org
            </a>
          </strong>{" "}
          to learn more about how you can participate in FIRST® programs,
          whether as a student team member, coach, sponsor, or community
          partner.
        </p>
      </section>
    </div>
  );
}
