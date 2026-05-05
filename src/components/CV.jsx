import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFDownloadLink,
} from '@react-pdf/renderer'
import { Mail, Phone } from './icons/PDFIcons'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: '2rem',
  },
  header1: {
    fontSize: '3rem',
    color: '#1e293b',
    fontWeight: '600',
  },
  subHeader: {
    fontSize: '1rem',
    color: '#1e293b',
    fontWeight: '300',
    marginTop: '.4rem',
  },
  wrapper: {
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '.5rem',
    marginTop: '.5rem',
  },
  infoText: {
    color: '#1e293b',
    fontSize: '.7rem',
  },

  icon: {
    stroke: '#2563eb',
  },

  header2: {
    color: '#2563eb',
    fontSize: '.8rem',
    marginTop: '1.5rem',
  },
  header3: {
    color: '#1e293b',
    fontSize: '.7rem',
    fontWeight: '600',
  },

  line: {
    width: '100%',
    height: '1px',
    backgroundColor: 'gray',
    margin: '.5rem 0 1rem 0',
  },

  text: {
    fontSize: '.6rem',
    opacity: '.7',
    marginTop: '.3rem',
  },
  italicText: {
    fontSize: '.6rem',
    fontStyle: 'italic',
    opacity: '.7',
    marginTop: '.3rem',
  },

  experienceInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default function CV({
  fullname,
  position,
  email,
  phone,
  schoolName,
  titleOfStudy,
  dateOfStudy,
  companyName,
  responsibilities,
  from,
  to,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header1}>{fullname}</Text>
          <Text style={styles.subHeader}>{position}</Text>
        </View>

        <View style={styles.wrapper}>
          <View style={styles.infoContainer}>
            {email && (
              <>
                <Mail color="#3b82f6" />
                <Text style={styles.infoText}>{email}</Text>
              </>
            )}
          </View>
          <View style={styles.infoContainer}>
            {phone && (
              <>
                <Phone color="#3b82f6" />
                <Text style={styles.infoText}>{phone}</Text>
              </>
            )}
          </View>
        </View>

        {(schoolName || titleOfStudy || dateOfStudy) && (
          <>
            <Text style={styles.header2}>EDUCATION</Text>
            <View style={styles.line}></View>
            <Text style={styles.header3}>{schoolName}</Text>
            <Text style={styles.italicText}>{titleOfStudy}</Text>
            <Text style={styles.text}>{dateOfStudy}</Text>
          </>
        )}

        {(companyName || responsibilities || from || to) && (
          <>
            <Text style={styles.header2}>EXPERIENCE</Text>
            <View style={styles.line}></View>
            <Text style={styles.header3}>{companyName}</Text>
            <View style={styles.experienceInfoWrapper}>
              <Text style={styles.italicText}>{position}</Text>
              <Text style={styles.text}>{`${from} - ${to}`}</Text>
            </View>
            <Text style={styles.text}>{responsibilities}</Text>
          </>
        )}

        <PDFDownloadLink fileName="cv">Download</PDFDownloadLink>
      </Page>
    </Document>
  )
}
