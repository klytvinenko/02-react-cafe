import styles from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: VotesObj;
  totalVotes: number;
  positiveRate: number;
}
interface VotesObj {
  good: number;
  neutral: number;
  bad: number;
}

const VoteStats = (props: VoteStatsProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{props.votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{props.votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{props.votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{props.totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{props.positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
