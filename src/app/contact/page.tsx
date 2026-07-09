import type React from "react";
import { Button } from "@/components";

export default function Contact() {
  const titleClass =
    "font-heading text-3xl mb-8 pb-4 border-b border-border-color font-medium";

  return (
    <>
      <section className="my-8">
        <h1 className="font-heading text-3xl font-bold">Get in Touch</h1>
        <p>
          Have questions, want to become a sponsor, or interested in joining?
          Reach out to us
        </p>
      </section>
      <div className="grid grid-cols-[1fr_2fr] gap-12">
        <div className="bg-near-black border-border-color rounded-xl p-8">
          <h3 className={titleClass}>Contact Information</h3>
          <InfoItem title="General Inquiries">
            <p className="text-neutral-400 leading-relaxed">
              roboticsbothell@gmail.com
            </p>
          </InfoItem>
          <InfoItem title="Our Location">
            <p className="text-neutral-400 leading-relaxed">
              Bothell High School
              <br />
              Bothell, WA 98011
            </p>
          </InfoItem>
          <InfoItem title="Follow Us">
            <a
              href="https://www.instagram.com/arrowdynamics10079/?hl=en"
              className="block text-accent-blue no-underline font-medium mt-2 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@ad10079"
              className="block text-accent-blue no-underline font-medium mt-2 hover:underline"
            >
              YouTube
            </a>
          </InfoItem>
        </div>
        <form
          action="https://formspree.io/f/manlebze"
          method="POST"
          className="bg-near-black border border-border-color rounded-xl p-8"
        >
          <h3 className={titleClass}>Send Us a Message</h3>
          <Field name="name" label="Your Name" type="text" />
          <Field name="email" label="Your Email" type="email" />
          <Field name="subject" label="Subject" type="text" />
          <Field name="message" label="Message" type="textarea" />
          <Button className="w-full!" type="submit">
            Send Message
          </Button>
        </form>
      </div>
      <div className="rounded-xl overflow-hidden mb-16 border border-border-color mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.0562863841496!2d-122.22181472242119!3d47.760962577303694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900e3e401121d7%3A0x53e9710a85de6d6e!2sBothell%20High%20School!5e0!3m2!1sen!2sus!4v1763100650764!5m2!1sen!2sus"
          title="Our location"
          width="100%"
          height="450"
          className="border-0"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

function InfoItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <strong className="block font-semibold mb-2">{title}</strong>
      {children}
    </div>
  );
}

function Field({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) {
  const className =
    "w-full bg-[#0d0d0d] border border-border-color rounded-lg py-3 px-4 focus:outline-none focus:border-accent-blue focus:shadow-md";

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block font-medium mb-2 text-neutral-400">
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          id={name}
          name={name}
          required
          className={className}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          rows={15}
          required
          className={className}
        ></textarea>
      )}
    </div>
  );
}
