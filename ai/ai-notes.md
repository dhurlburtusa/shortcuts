# AI Notes

- Began using set rules and patterns, mindlessly matching patterns
- Chinese room argument
  + 1980, philosopher John Searle
- Weak vs strong AI
- Symbolic systems
- Expert systems
- Combinatorial explosion
  
## Machine Learning

Learn by sensing data. Learn by "experience". Different from symbolic systems, still just identifying patterns.

Machine learning systems feed on data to learn new things.

### Learning Strategies

<dl>
  <dt>Supervised learning</dt>
  <dd>A data scientist acts like a tutor for the machine. They show the machine the correct answers and then let the system train itself to get better. Needs to have a knowledgeable tutor. Depends on labeled data.</dd>
  <dd>
    Split the data into a training set and a test set.
    <dl>
      <dt>Training data set</dt>
      <dd>A smaller chunk of labeled data that the machine uses to learn. Curated and known from the beginning.</dd>
    </dl>
    <dl>
      <dt>Test data set</dt>
      <dd>Typically many times larger than the training data. May not be curated and the expected outcome may not be known.</dd>
    </dl>
    Uses machine learning algorithms which rely on statistics. These algorithms help the machine find relationships within the data.
  </dd>
</dl>
<dl>
  <dt>Unsupervised learning</dt>
  <dd>The machine makes all the observations on its own. Needs access to a lot of good data.</dd>
</dl>

### Classifications

Used to organize data. A supervised machine learning challenge. Uses human created categories.

#### Binary Classification

Used to determine whether an email is spam or not spam. Used to detect fraudulent credit card transactions.

### Data Clustering

Uses unsupervised machine learning to create groups or clusters.

### Reinforcement Learning

Machine learning algorithms that use rewards as a way to give the system incentive to find new patterns.

#### Q-Learning

Reinforcement learning that will find the best course of action, given the current state of the agent.

## Artificial Neural Network

AI system that mimics the structure of the human brain.

Input layer, hidden layers , output layer.

Machine learning system. Basically, makes guesses and compares those guesses to the correct answer.

Is trained with different input data. Adjusts hidden layer to improve output layer.

## Natural Language Processing

This is when you interact with the machine using your own natural language.

Uses machine learning and artificial neural networks.
