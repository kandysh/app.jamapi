import { MdVideoLabel, MdMovie, MdTrendingUp } from 'react-icons/md';

function SearchBubbles() {
	return <div>
        <div>
            <MdVideoLabel/>
            <h4>TV</h4>
        </div>
        <div>
            <MdMovie/>
            <h4>MOVIE</h4>
        </div>
        <div>
            <MdTrendingUp/>
            <h4>TOP</h4>
        </div>
    </div>;
}

export default SearchBubbles;
