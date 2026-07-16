import type { Metadata } from "next";
import type React from "react";
import { Button, Title2 } from "@/components";

export const metadata: Metadata = {
  title: "Donate",
};

export default function Donate() {
  return (
    <>
      <Title2
        title="Donate!"
        subtitle="Donate to FIRST Washington in support of BHS ArrowDynamics"
      />
      <Donation title="Donate Through FIRST Washington">
        <DonationInstructions>
          You can use the button below to donate to Team 10079's booster
          account. FirstWA is the statewide robotics nonprofit that houses our
          booster account and is a 501c3, so all donations are tax-deductible.
        </DonationInstructions>
        <Button
          url="https://secure.givelively.org/donate/washington-first-robotics/frc-10079"
          newTab
          className="text-xl! py-4! px-12! mt-4! bg-green-500!"
        >
          Donate
        </Button>
      </Donation>
      <Donation title="Become a Sponsor">
        <DonationInstructions>
          Thank you for considering sponsoring us. We greatly appreciate your
          generosity. Please complete the form below. We will be happy to come
          to your business and conduct a demonstration or give a presentation of
          our team.
        </DonationInstructions>
        <Button
          url="https://docs.google.com/forms/d/e/1FAIpQLScSdcQFbYjaHHs5gVnrRfIVISCk_aHpDh_8tA3sHzHzNSoGjQ/viewform?usp=header"
          newTab
          className="text-xl! py-4! px-12! mt-4! bg-green-500!"
        >
          Sponsor Sign Up
        </Button>
      </Donation>
      <Donation title="Donate Directly To Bothell High School">
        <DonationInstructions>
          Donate directly to our Bothell High School Robotics account through
          the Northshore School District. If you are not a family with a student
          in NSD, you will need to sign up for a guest account first.
        </DonationInstructions>
        <div className="flex justify-center items-center gap-4 flex-wrap my-5">
          <Button
            url="https://docs.google.com/forms/d/e/1FAIpQLScSdcQFbYjaHHs5gVnrRfIVISCk_aHpDh_8tA3sHzHzNSoGjQ/viewform?usp=header"
            newTab
            className="text-xl! py-4! px-12! mt-4!"
          >
            Register Guest Account
          </Button>
          <Button
            url="https://docs.google.com/forms/d/e/1FAIpQLScSdcQFbYjaHHs5gVnrRfIVISCk_aHpDh_8tA3sHzHzNSoGjQ/viewform?usp=header"
            newTab
            className="text-xl! py-4! px-12! mt-4! bg-green-500!"
          >
            Sign In To TouchBase
          </Button>
        </div>
        <DonationInstructions>
          After you submit your account request, you will receive a verification
          email. Once your email is verified, you can sign in.
        </DonationInstructions>
        <div className="mt-5 p-4 rounded-lg border border-border-color bg-[#ffffff05]">
          <p className="font-bold mb-1.5">Use this path after signing in:</p>
          <p className="leading-relaxed">
            Items At All Schools &rarr; High school &rarr; Bothell High School
            &rarr; Robotics &rarr; Donations for Robotics*
          </p>
        </div>
        <p className="mt-4 text-neutral-400 mx-auto">
          Please note: The school district charges a nominal processing fee of
          $2.95, which is added to your donation before checkout.
        </p>
      </Donation>
    </>
  );
}

function Donation({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-4 px-8 pb-16 max-w-300 mx-auto flex justify-center items-center">
      <div className="text-center p-12 bg-near-black border border-border-color rounded-xl">
        <h2 className="font-heading text-4xl font-extrabold mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function DonationInstructions({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-relaxed mb-4 max-w-175 mx-auto text-lg">{children}</p>
  );
}
