import React from "react";
import { Faqs, Subscription } from "../components";
import faqsData from "../components/faqs/faqs.json";

export default function FaqsContainer() {
  return (
    <Faqs>
      <Faqs.Title>Frequently Asked Questions</Faqs.Title>
      <Faqs.List>
        {faqsData.map((item) => (
          <Faqs.Item key={item.id}>
            <Faqs.Question>{item.question}</Faqs.Question>
            <Faqs.Answer>{item.answer}</Faqs.Answer>
          </Faqs.Item>
        ))}
      </Faqs.List>

      <Subscription>
        <Subscription.Title>
          Ready to watch? Enter your email to create or restart your membership.
        </Subscription.Title>
        <Subscription.Field>
          <Subscription.Input placeholder="Email address" />
          <Subscription.Button>Get Started </Subscription.Button>
        </Subscription.Field>
      </Subscription>
    </Faqs>
  );
}
