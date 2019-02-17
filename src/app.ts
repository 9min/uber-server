import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";
import { async } from "q";

class App {
  public app: GraphQLServer;
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };

  private jwt = async (req, res, next): Promise<void> => {
    const token = req.get("X-JWT");
    if (token) {
    }
  };

  constructor() {
    this.app = new GraphQLServer({
      schema
    });
    this.middlewares();
  }
}

export default new App().app;
