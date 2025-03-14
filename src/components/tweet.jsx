import { ClientTweetCard } from "@/components/magicui/client-tweet-card";

/**
 * <TweetCard /> (Server Side Only)
 * <ClientTweetCard /> (Client Side Only)
 */
export function TweetDemo({id}) {
  return <ClientTweetCard id={id} />;
}
