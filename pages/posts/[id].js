import Layout from "../../components/layout/Layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import styles from "../../styles/[id].module.scss";

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article className={styles.article}>
				<h1 className={styles.title}>{postData.title}</h1>
				<div className={styles.date}>
					<Date dateString={postData.date} />
				</div>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	};
}
