import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne
} from "typeorm";

import Chat from "./Chat";
import User from "./User";

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  text: string;

  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat;

  @ManyToOne(type => User, user => user.messages)
  user: User;

  @CreateDateColumn() createAt: string;
  @CreateDateColumn() updateAt: string;
}

export default Message;
