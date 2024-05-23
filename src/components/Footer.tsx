import { ChevronDown, Globe } from 'lucide-react'

import { styled } from "../stitches.config";
import { Blurred, Row } from './Common';
export const Footer = () => {
    return (
        <StickyFooter>
            <p style={{ fontSize: '12px', fontWeight: '400' }}>Copyright © 2024 . All rights reserved.</p>
            <Row style={{ columnGap: '1rem' }}>
                <Language> <Globe height={16} strokeWidth={1.6} width={16} /> English(IN)</Language>
                <div style={{ fontSize: '14px', fontWeight: '500' }}>₹ INR</div>
                <Row>
                    <div style={{ fontSize: '14px', fontWeight: '500' }}>Support & Resources </div>
                    <ChevronDown height={20} strokeWidth={2.2} width={20} />
                </Row>
            </Row>
        </StickyFooter>
    );
}

const StickyFooter = styled(Blurred, {
    alignItems: 'center',
    // backgroundColor: 'white',
    // backdropFilter: 'blur(40px)',
    // backgroundColor: 'rgba(255, 255, 255, 0.45)',
    // borderTop: '1px solid #eee',
    bottom: 0,
    boxShadow: '0 -4px 10px -4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    position: 'fixed',
    textAlign: 'center',
    width: '90%',
    zIndex: '2',
}
)

const Language = styled('span', {
    alignItems: 'center',
    display: 'flex',
    fontSize: '14px',
    fontWeight: '500',
    gap: '.2rem',
    justifyContent: 'center',
})