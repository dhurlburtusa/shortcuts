# Testing Notes

Software testing is broadly categorized into two main types: **Functional Testing** (testing what the software does) and **Non-Functional Testing** (testing how the software performs).

Here is a breakdown of the primary types of testing and how they differ from one another.

## Functional Testing (the "What")

These tests verify that the software behaves exactly as expected based on requirements.

- **Unit Testing**: Tests individual functions, methods, or components in isolation. It is done by developers to catch code logic errors early.
- **Integration Testing**: Tests how different modules or components work together. It focuses on data flow and interfaces between units.
- **System Testing**: Tests the complete, fully integrated application as a whole. It ensures the entire system meets the specified business requirements.
- **Acceptance Testing**: Verified by end-users or clients (alpha/beta testing). It determines if the software is ready for production and meets business needs.
- **Regression Testing**: Re-tests existing features after a code change. It ensures new updates did not break previously working functionality.

## Non-Functional Testing (the "How")

These tests evaluate external characteristics like operational readiness, speed, security, and user experience.

- **Performance Testing**: Checks application speed, responsiveness, and stability under a specific workload.
- **Load Testing**: Evaluates how the system handles a normal, expected amount of concurrent user traffic.
- **Stress Testing**: Pushes the software past its limits until it breaks to see how it recovers.
- **Security Testing**: Identifies vulnerabilities, threats, and risks to protect data from malicious attacks.
- **Usability Testing**: Evaluates how user-friendly, intuitive, and easy the software interface is for actual humans.

## Key Differences Summary

| Testing Type | Scope | Performed By | Main Objective |
| ------------ | ----- | ------------ | -------------- |
| Unit | Smallest isolated code block | Developers | Verify code logic |
| Integration | Group of combined modules | QA / Developers | Verify communication between components |
| System | Entire application end-to-end | QA Engineers | Verify end-to-end user flows |
| Acceptance | Entire application | Clients / Users | Confirm readiness for release |
| Non-Functional | System infrastructure/behavior | Specialized QA | Check speed, stability, and security |
