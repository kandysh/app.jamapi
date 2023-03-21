import { useState } from 'react';

const ContentImage = ({ source }: { source: string }) => {
	const [picture] = useState<string>(
		source.includes('myanimelist')
			? `${source.slice(0, -4)}l.jpg`
			: 'https://placewaifu.com/image/'
	);
	return <img alt={picture} src={picture} />;
};

export default ContentImage;
