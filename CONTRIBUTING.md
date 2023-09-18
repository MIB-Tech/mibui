# Contributing Guidelines

Thank you for considering contributing to our project! We value your contributions and strive to make the process as smooth as possible. Please take a moment to review these guidelines before getting started.

## Git Workflow

Our Git workflow is based on the following branches:

- `main`: The production-ready branch.
- `dev`: The development branch for ongoing work.
- Feature branches: Created for specific features or bug fixes, named after Jira issue IDs.

## Creating a Feature Branch

1. Clone the repository.
2. Switch to the `dev` branch.
3. Create a feature branch based on the Jira issue.
4. Develop your feature on this branch and make frequent commits.

## Commit Message Guidelines

- Follow semantic commit message guidelines when writing commit messages.
- Include the Jira issue ID in your commit messages, e.g., "feat(UK-XXX): Add user authentication."

## Pull Requests

1. Open a pull request (PR) to merge your feature branch into `dev`.
2. Link the PR to the corresponding Jira issue.
3. Assign reviewers to the PR.

## Code Review

1. Reviewers will provide feedback and suggestions.
2. Make necessary changes to your feature branch based on feedback.
3. Notify reviewers when you're ready for re-review.

## Continuous Integration

- Our CI/CD system automatically builds and tests code on each push to the `dev` branch.
- Ensure your changes pass all tests before creating a PR.

## Resolving Conflicts

- Resolve any merge conflicts that may arise during PR merges.
- Communicate with reviewers and collaborators to resolve conflicts promptly.

## Release Process

- Periodically, the `dev` branch is merged into `main` to create new releases.
- Tag releases with version numbers.

Thank you for contributing to our project and helping us make it better!
