import LessonClient from "@/components/LessonClient";

export default async function LessonPage(props: PageProps<"/lesson/[id]">) {
  await props.params;

  return <LessonClient />;
}
