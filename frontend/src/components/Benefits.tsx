import React, { useEffect, useState } from 'react';
import { Typography, styled } from '@mui/material';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

const BenefitsSection = styled('div')({
  backgroundColor: '#c8e6c9', // Light green color
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

const BenefitItem = styled('p')({
  margin: '8px 0',
});

interface BenefitsProps {
  userId: string | undefined;
}

const Benefits: React.FC<BenefitsProps> = ({ userId }) => {
  const [claimStatus, setClaimStatus] = useState('');

  useEffect(() => {
    const checkClaimStatus = async () => {
      if (userId) {
        const docRef = doc(db, 'citizens', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && data.Benefits) {
            setClaimStatus(data.Benefits);
          }
        }
      }
    };
    checkClaimStatus();
  }, [userId]);

  return (
    <BenefitsSection>
      <BenefitItem>Monthly monetary allowance (local)</BenefitItem>
      <BenefitItem>Birthday Cake</BenefitItem>
      <BenefitItem>Annual Share From Brgy Fund 1%</BenefitItem>
      <BenefitItem>(National) Social Pension</BenefitItem>
      {claimStatus === 'claimed' ? (
        <Typography variant="body1" sx={{ color: 'grey' }}>
          Claimed
        </Typography>
      ) : (
        <Typography variant="body1" sx={{ color: 'green' }}>
          Unclaimed
        </Typography>
      )}
    </BenefitsSection>
  );
};

export default Benefits;
