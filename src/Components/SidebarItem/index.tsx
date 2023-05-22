import * as C from './styles';
import { Link } from 'react-router-dom'
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import { ReactComponent as VerifiedIcon } from '../../svgs/verified.svg'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}


export const SideBarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === "profile" && <ProfileIcon fill='white' width={24} height={24} />}
                    {icon === "book" && <BookIcon fill='white' width={24} height={24} />}
                    {icon === "mail" && <MailIcon fill='white' width={24} height={24} />}
                    {icon === "verified" && <VerifiedIcon fill='white' width={24} height={24} />}
                </C.IconArea>
                <C.Point active={active}>

                </C.Point>
            </Link>
        </C.Container>
    )
}


export default SideBarItem;