import { PostgresSaver } from "@langchain/langgraph-checkpoint-postgres";
import dotenv from 'dotenv';
dotenv.config();

const checkpointer = PostgresSaver.fromConnString(
  process.env.DATABASE_URL
);

async function run() {
  try {
    await checkpointer.setup();
    console.log("Checkpointer setup complete.");
  } catch (err) {
    console.error("Setup failed:", err);
  }
  process.exit(0);
}
run();
