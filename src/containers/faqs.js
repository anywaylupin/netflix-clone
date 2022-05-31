import React from "react";
import { Faqs, Form } from "../components";
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

      <Form>
        <Form.Title>
          Ready to watch? Enter your email to create or restart your membership.
        </Form.Title>
        <Form.Field>
          <Form.Input placeholder="Email address" />
          <Form.Button>Get Started </Form.Button>
        </Form.Field>
      </Form>
    </Faqs>
  );
}
