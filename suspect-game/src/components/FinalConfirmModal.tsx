import { SuspectType } from "@/fixtures/startup/suspects";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";

interface FinalConfirmModalProps {
  isAllClueSearched: boolean;
  isOpen: boolean;
  suspect: SuspectType | null;
  onClose: () => void;
  onConfirm: () => void;
}

export default function FinalConfirmModal({
  isAllClueSearched,
  isOpen,
  suspect,
  onClose,
  onConfirm,
}: FinalConfirmModalProps) {
  if (!suspect) {
    return null;
  }
  return (
    <Dialog open={isOpen}>
      <DialogTitle sx={{ justifyContent: "center" }}>최종 결정</DialogTitle>
      <DialogContent>
        <Box display="flex">
          <Typography color="error">{suspect.name}</Typography>
          <Typography>을(를) 진범으로 결정합니다.</Typography>
        </Box>

        <Box
          sx={{
            padding: 3,
            width: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar />
          <Paper
            sx={{
              py: 3,
              px: 2,
            }}
          >
            {suspect.finalArgument}
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button color="error" onClick={onConfirm}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}
