"use client";

import { useTweet } from "react-tweet";

import {
  MagicTweet,
  TweetNotFound,
  TweetSkeleton,
} from "@/components/magicui/tweet-card";

/**
 * 客户端推文卡片组件
 * @param {Object} props
 * @param {string} props.id - 推文ID
 * @param {string} [props.apiUrl] - API URL
 * @param {React.ReactNode} [props.fallback] - 加载时显示的内容
 * @param {Object} [props.components] - 自定义组件
 * @param {Object} [props.fetchOptions] - 获取选项
 * @param {Function} [props.onError] - 错误处理函数
 * @param {string} [props.className] - 自定义类名
 */
export const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  className,
  ...props
}) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback;
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <MagicTweet tweet={data} components={components} className={className} {...props} />;
};
