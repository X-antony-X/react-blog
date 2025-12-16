import TextType from './TextType'
import Threads from './Threads'

function About() {
    return (
        <>
            <div className="text-xl mt-60 text-[#0f0] text-center">
            <TextType
                text={[
                "This blog app is a project to learn react !"
                ]}
                typingSpeed={90}
                deletingSpeed={20}
                pauseDuration={3000}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}/>
            </div>
            <div style={{ width: '100%', height: '300px', position: 'relative' }} className='mt-10'>
            <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={false}
            />
            </div>
        </>
    )
}

export default About
//this blog app is a project to learn react